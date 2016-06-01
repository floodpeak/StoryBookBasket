import expect from 'expect'
import discoveryConnectStates from '../../reducers/discoveryConnect'
import * as types from '../../constants'

describe('discoveryConnect reducer', () => {
  it('should handle initial state', () => {
    expect(
      discoveryConnectStates(undefined, {})
    ).toEqual({
      text: '点击搜索血压计',
      status: 'disconnect'
    })
  })

  it('should handle START_DISCOVERY', () => {
    expect(
      discoveryConnectStates({}, {
        type: types.START_DISCOVERY,
        text: '正在搜索血压计'
      })
    ).toEqual({
      text: '正在搜索血压计',
      status: 'searching'
    })

    expect(
      discoveryConnectStates({
        text: '点击搜索血压计',
        status: 'disconnect'
      }, {
        type: types.START_DISCOVERY,
        text: '正在搜索血压计'
      })
    ).toEqual({
      text: '正在搜索血压计',
      status: 'searching'
    })

    expect(
      discoveryConnectStates({
        text: '开始测量',
        status: 'ready',
      }, {
        type: types.START_DISCOVERY,
        text: '正在搜索血压计'
      })
    ).toEqual({
      text: '正在搜索血压计',
      status: 'searching'
    })
  })

  it('should handle DISCOVERY_FAILURE', ()=>{

    expect(
      discoveryConnectStates({}, {
        type: types.DISCOVERY_FAILURE,
        text: '未发现设备'
      })
    ).toEqual({
      text: '未发现设备',
      status: 'search_failure'
    })

    expect(
      discoveryConnectStates({
        text: '点击搜索血压计',
        status: 'disconnect'
      }, {
        type: types.DISCOVERY_FAILURE,
        text: '未发现设备'
      })
    ).toEqual({
      text: '未发现设备',
      status: 'search_failure'
    })

  })

  it('should handle START_CONNECT', ()=>{
    expect(
      discoveryConnectStates({}, {
        type: types.START_CONNECT,
        macId: '8966',
        text: '正在连接血压计'
      })
    ).toEqual({
      text: '正在连接血压计',
      status: 'connecting',
      macId: '8966'
    })

    expect(
      discoveryConnectStates({
        text: '正在搜索血压计',
        status: 'searching'
      }, {
        type: types.START_CONNECT,
        macId: '8966',
        text: '正在连接血压计'
      })
    ).toEqual({
      text: '正在连接血压计',
      status: 'connecting',
      macId: '8966'
    })

    expect(
      discoveryConnectStates({
        status: 'searching_done'
      }, {
        type: types.START_CONNECT,
        macId: '8966',
        text: '正在连接血压计'
      })
    ).toEqual({
      text: '正在连接血压计',
      status: 'connecting',
      macId: '8966'
    })

  })


  it('should handle CONNECT_SUCCESS', ()=>{

    expect(
      discoveryConnectStates({
        text: '正在连接血压计',
        status: 'connecting',
        macId: '8966'
      }, {
        type: types.CONNECT_SUCCESS,
        text: '开始测量'
      })
    ).toEqual({
      text: '开始测量',
      status: 'ready',
      macId: '8966'
    })

  })

  it('should handle CONNECT_FAILURE', ()=>{

    expect(
      discoveryConnectStates({
        text: '正在连接血压计',
        status: 'connecting',
        macId: '8966'
      }, {
        type: types.CONNECT_FAILURE,
        text: '血压计连接失败，请重试',
        macId: '8966'
      })
    ).toEqual({
      text: '血压计连接失败，请重试',
      status: 'connect_failure',
      macId: '8966'
    })
  })

  it('should handle DISCONNECT', ()=>{

    expect(
      discoveryConnectStates({
        text: '开始测量',
        status: 'ready',
        macId: '8966'
      }, {
        type: types.DISCONNECT,
        text: '点击搜索血压计',
        macId: '8966'
      })
    ).toEqual({
      text: '点击搜索血压计',
      status: 'disconnect',
      macId: '8966'
    })
  })

})
