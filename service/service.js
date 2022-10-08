const pkgInfo = require('./package.json');
const Service = require('webos-service');

const service = new Service(pkgInfo.name);
const logHeader = '[' + pkgInfo.name + ']';

// 1. heartbeat service
const heartbeat = service.register('heartbeat');

const subscriptions = {};
let heartbeatinterval;
let x = 1;
function createHeartBeatInterval() {
  if (heartbeatinterval) {
    return;
  }
  console.log(logHeader, 'create_heartbeatinterval');
  heartbeatinterval = setInterval(function () {
    sendResponses();
  }, 1000);
}

// send responses to each subscribed client
function sendResponses() {
  console.log(logHeader, 'send_response');
  console.log(
    'Sending responses, subscription count=' + Object.keys(subscriptions).length
  );
  for (const i in subscriptions) {
    if (Object.prototype.hasOwnProperty.call(subscriptions, i)) {
      const s = subscriptions[i];
      s.respond({
        returnValue: true,
        event: 'beat ' + x,
      });
    }
  }
  x++;
}

heartbeat.on('request', function (message) {
  console.log(logHeader, 'SERVICE_METHOD_CALLED:/heartbeat');
  message.respond({ event: 'beat' }); // initial response
  if (message.isSubscription) {
    subscriptions[message.uniqueToken] = message; //add message to "subscriptions"
    if (!heartbeatinterval) {
      createHeartBeatInterval();
    }
  }
});

heartbeat.on('cancel', function (message) {
  delete subscriptions[message.uniqueToken]; // remove message from "subscriptions"
  const keys = Object.keys(subscriptions);
  if (keys.length === 0) {
    // count the remaining subscriptions
    console.log('no more subscriptions, canceling interval');
    clearInterval(heartbeatinterval);
    heartbeatinterval = undefined;
  }
});

// 2. alarm service
service.register('checkAlarm', (message) => {
  const intervalTime = 1000;
  let interval = setInterval(() => {
    let url = 'luna://com.webos.notification/createToast';
    let params = {
      message: `Hello! +${i}`,
    };

    service.call(url, params, (m2) => {});

    if (++i > max) {
      clearInterval(interval);
    }
  }, 3000);

  //heartbeat 구독
  const sub = service.subscribe('luna://com.mayi.app.service/heartbeat', {
    subscribe: true,
  });

  sub.addListener('response', function (msg) {
    console.log(JSON.stringify(msg.payload));

    // 120번 heartbeat 후 종료
    // if (++heartbeatCnt > heartbeatMax) {
    //   sub.cancel();
    //   setTimeout(function () {
    //     console.log(heartbeatMax + ' responses received, exiting...');
    //     process.exit(0);
    //   }, 1000);
    // }
  });

  message.respond({
    returnValue: true,
    Response: 'My service has been started.',
  });
});

// 3. test: serviceOn
service.register('serviceOn', (message) => {
  console.log(logHeader, message);

  const max = 5;
  let i = 0;
  let interval = setInterval(() => {
    let url = 'luna://com.webos.notification/createToast';
    let params = {
      message: `Hello! +${i}`,
    };

    service.call(url, params, (m2) => {
      console.log(
        logHeader,
        'SERVICE_METHOD_CALLED:com.webos.notification/createToast'
      );
    });

    if (++i > max) {
      clearInterval(interval);
    }
  }, 3000);

  //heartbeat 구독
  const sub = service.subscribe('luna://com.mayi.app.service/heartbeat', {
    subscribe: true,
  });

  const heartbeatMax = 120;
  let heartbeatCnt = 0;

  sub.addListener('response', function (msg) {
    console.log(JSON.stringify(msg.payload));

    // 120번 heartbeat 후 종료
    if (++heartbeatCnt > heartbeatMax) {
      sub.cancel();
      setTimeout(function () {
        console.log(heartbeatMax + ' responses received, exiting...');
        process.exit(0);
      }, 1000);
    }
  });

  message.respond({
    returnValue: true,
    Response: 'My service has been started.',
  });
});
