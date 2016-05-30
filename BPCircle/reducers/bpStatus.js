
import {DISCOVERY_BP3L, DISCOVERY_BP3L_AGAIN, STOP_DISCOVERY_BP3L, CONNECT_BP3L,
    CONNECT_BP3L_AGAIN, DIS_CONNECT_BP3L, START_MEASURE, STOP_MEASURE} from '../constants'

const initialState = [
  {
    text: '连接血压计',
    status: 'disconnect'
  }
]

export default function bpStatus(state = initialState, action) {
  switch (action.type) {
    case DISCOVERY_BP3L:
      //TODO
      return state
      break;
    default:
      return state
  }
}
