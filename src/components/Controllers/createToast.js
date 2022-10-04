import LS2Request from '@enact/webos/LS2Request';
const webOSBridge = new LS2Request();

// const webOSBridge = new WebOSServiceBridge();

export const createToast = (msg) => {
  const params = {
    message: msg,
  };

  const lsRequest = {
    service: 'luna://com.webos.notification',
    method: 'createToast',
    parameters: params,
  };

  webOSBridge.send(lsRequest);
};
