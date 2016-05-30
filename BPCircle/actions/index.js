import * as types from '../constants'

export function discovery(text) {
  return { type: types.DISCOVERY_BP3L, text}
}

export function discoveryAgain(text) {
  return { type: types.DISCOVERY_BP3L_AGAIN, text}
}

export function stopDiscovery() {
  return { type: types.STOP_DISCOVERY_BP3L}
}

export function connect(id, text) {
  return { type: types.CONNECT_BP3L, id, text}
}

export function connectAgain(id, text) {
  return { type: types.CONNECT_BP3L_AGAIN, id, text}
}

export function disConnect(id) {
  return { type: types.DIS_CONNECT_BP3L, id}
}

export function startMeasure() {
  return { type: types.START_MEASURE }
}

export function stopMeasure() {
  return { type: types.STOP_MEASURE }
}
