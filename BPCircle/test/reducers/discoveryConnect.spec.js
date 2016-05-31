import expect from 'expect'
import discoveryConnectStates from '../../reducers/discoveryConnect'
import * as types from '../../constants'

describe('discoveryConnect reducer', () => {
  it('should handle initial state', () => {
    expect(
      discoveryConnectStates(undefined, {})
    ).toEqual({
      text: '连接血压计',
      status: 'disconnect'
    })
  })

  it('should handle START_DISCOVERY', () => {
    expect(
      discoveryConnectStates({}, {
        type: types.START_DISCOVERY,
        text: '搜索血压仪'
      })
    ).toEqual({
      text: '搜索血压仪',
      status: 'searching'
    })

    expect(
      discoveryConnectStates({
        text: '连接血压计',
        status: 'disconnect'
      }, {
        type: types.START_DISCOVERY,
        text: '搜索血压仪'
      })
    ).toEqual({
      text: '搜索血压仪',
      status: 'searching'
    })

    expect(
      discoveryConnectStates({
        text: '开始测量',
        status: 'ready',
      }, {
        type: types.START_DISCOVERY,
        text: '搜索血压仪'
      })
    ).toEqual({
      text: '搜索血压仪',
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
        text: '连接血压计',
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
        text: '连接血压计'
      })
    ).toEqual({
      text: '连接血压计',
      status: 'connecting',
      macId: '8966'
    })

    expect(
      discoveryConnectStates({
        text: '搜索血压仪',
        status: 'searching'
      }, {
        type: types.START_CONNECT,
        macId: '8966',
        text: '连接血压计'
      })
    ).toEqual({
      text: '连接血压计',
      status: 'connecting',
      macId: '8966'
    })

    expect(
      discoveryConnectStates({
        status: 'searching_done'
      }, {
        type: types.START_CONNECT,
        macId: '8966',
        text: '连接血压计'
      })
    ).toEqual({
      text: '连接血压计',
      status: 'connecting',
      macId: '8966'
    })

  })


  it('should handle CONNECT_SUCCESS', ()=>{

    expect(
      discoveryConnectStates({
        text: '连接血压计',
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
        text: '连接血压计',
        status: 'connecting',
        macId: '8966'
      }, {
        type: types.CONNECT_FAILURE,
        text: '连接血压计失败',
        macId: '8966'
      })
    ).toEqual({
      text: '连接血压计失败',
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
        text: '搜索血压计',
        macId: '8966'
      })
    ).toEqual({
      text: '搜索血压计',
      status: 'disconnect',
      macId: '8966'
    })
  })

})
