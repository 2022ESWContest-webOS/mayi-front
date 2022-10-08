import { createToast } from './createToast';

// import LS2Request from '@enact/webos/LS2Request';
// const webOSBridge = new LS2Request();

export const serviceOn = async () => {
  createToast('test start!');

  // const url = 'luna://com.mayi.app.service/serviceOn';
  // const params = {};
  // webOSBridge.call(url, JSON.stringify(params));

  // webOSBridge.onservicecallback = (msg) => {
  //   console.log(msg);
  //   createToast('success!!!');
  // };
};
