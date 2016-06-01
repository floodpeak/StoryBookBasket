
import {START_DISCOVERY, DISCOVERY_FAILURE, START_CONNECT, CONNECT_SUCCESS,
              CONNECT_FAILURE, DISCONNECT} from '../constants'

const initialState = {
  text: '点击搜索血压计',
  status: 'disconnect'
}

export default function discoveryState(state = initialState, action) {
  switch (action.type) {
    case START_DISCOVERY:
      return {
        ...state,
        status: 'searching',
        text: action.text
      }
      break;
    case DISCOVERY_FAILURE:
      return {
        ...state,
        status: 'search_failure',
        text: action.text
      }
      break;
    case START_CONNECT:
      return {
        ...state,
        macId: action.macId,
        status: 'connecting',
        text: action.text
      }
      break;
    case CONNECT_SUCCESS:
      return {
        ...state,
        status: 'ready',
        text: action.text
      }
      break;
    case CONNECT_FAILURE:
      return {
        ...state,
        status: 'connect_failure',
        macId: action.macId,
        text: action.text
      }
      break;
    case DISCONNECT:
      return {
        ...state,
        status: 'disconnect',
        macId: action.macId,
        text: action.text
      }
    default:
      return state;
  }
}
