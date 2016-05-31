import expect from 'expect'
import * as types from '../../constants'
import * as actions from '../../actions/discoveryConnect'

describe('discoveryConnect actions', () => {
  it('startDiscovery should create START_DISCOVERY action', () => {
    expect(actions.startDiscovery('搜索血压计')).toEqual({
      type: types.START_DISCOVERY,
      text: '搜索血压计'
    })
  })

  it('discoveryFailure should create DISCOVERY_FAILURE action', () => {
    expect(actions.discoveryFailure('未发现设备')).toEqual({
      type: types.DISCOVERY_FAILURE,
      text: '未发现设备'
    })
  })

  it('startConnect should create START_CONNECT action', () => {
    expect(actions.startConnect('8966', '连接血压计')).toEqual({
      type: types.START_CONNECT,
      macId: '8966',
      text: '连接血压计'
    })
  })

  it('connectSuccess should create CONNECT_SUCCESS action', () => {
    expect(actions.connectSuccess('开始测量')).toEqual({
      type: types.CONNECT_SUCCESS,
      text: '开始测量'
    })
  })

  it('connectFailure should create CONNECT_FAILURE action', () => {
    expect(actions.connectFailure('8966','连接血压计失败')).toEqual({
      type: types.CONNECT_FAILURE,
      text: '连接血压计失败',
      macId: '8966'
    })
  })

  it('disConnect should create DISCONNECT action', () => {
    expect(actions.disConnect('8966')).toEqual({
      type: types.DISCONNECT,
      macId: '8966'
    })
  })


})
