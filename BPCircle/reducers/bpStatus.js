
import {DISCOVERY_BP3L, DISCOVERY_BP3L_AGAIN, STOP_DISCOVERY_BP3L, CONNECT_BP3L,
    CONNECT_BP3L_AGAIN, DIS_CONNECT_BP3L, START_MEASURE, STOP_MEASURE} from '../constants'

const initialState = {
    text: '连接血压计',
    status: 'disconnect'
  }

export default function bpStatus(state = initialState, action) {
  switch (action.type) {
    case DISCOVERY_BP3L:
      return {
        ...state,
        text: '搜索血压计',
        status: 'searching'
      }
      break;
    case CONNECT_BP3L:
      return {
        ...state,
        text: '连接血压计',
        status: 'connecting'
      }
      break;
    case STOP_DISCOVERY_BP3L:
      return {
        ...state,
        status: 'disconnect'
      }
      break;
    case DIS_CONNECT_BP3L:
      return {
        ...state,
        status: 'disconnect'
      }
      break;
    case START_MEASURE:
      return {
        ...state,
        status: 'measuring',
      }
      break;
    case STOP_MEASURE:
      return {
        ...state,
        status: 'ready',
        text: '开始测量'
      }
      break;
    default:
      return state
  }
}
