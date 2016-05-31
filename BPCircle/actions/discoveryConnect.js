import * as types from '../constants'


export function startDiscovery(text) {
  return {
    type: types.START_DISCOVERY,
    text
  }
}

export function discoveryFailure(text) {
  return {
    type: types.DISCOVERY_FAILURE,
    text
  }
}

export function startConnect(macId, text) {
  return {
    macId,
    type: types.START_CONNECT,
    text
  }
}

export function connectSuccess(text) {
  return {
    type: types.CONNECT_SUCCESS,
    text
  }
}

export function connectFailure(macId, text) {
  return {
    macId,
    type: types.CONNECT_FAILURE,
    text
  }
}

export function disConnect(macId){
  return {
    type: types.DISCONNECT,
    macId
  }
}

// export function stopDiscovery() {
//   return {
//     type: types.STOP_DISCOVERY
//   }
// }
//
// export function discoveryDone() {
//   return {
//     type: types.DISCOVERY_DONE
//   }
// }
