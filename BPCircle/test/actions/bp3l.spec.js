import expect from 'expect'
import * as types from '../../constants'
import * as actions from '../../actions'

describe('BPCircle actions', () => {
  it('discovery should create DISCOVERY_BP3L action', () => {
    expect(actions.discovery('搜索血压计')).toEqual({
      type: types.DISCOVERY_BP3L,
      text: '搜索血压计'
    })
  })

  it('discoveryAgain should create DISCOVERY_BP3L_AGAIN action', () => {
    expect(actions.discoveryAgain('重新搜索血压计')).toEqual({
      type: types.DISCOVERY_BP3L_AGAIN,
      text: '重新搜索血压计'
    })
  })

  it('stopDiscovery should create STOP_DISCOVERY_BP3L action', () => {
    expect(actions.stopDiscovery()).toEqual({
      type: types.STOP_DISCOVERY_BP3L
    })
  })

  it('connect should create CONNECT_BP3L action', () => {
    expect(actions.connect(8966, '连接血压计')).toEqual({
      type: types.CONNECT_BP3L,
      id: 8966,
      text: '连接血压计'
    })
  })

  it('connectAgain should create CONNECT_BP3L_AGAIN action', () => {
    expect(actions.connectAgain(8966, '重新连接血压计')).toEqual({
      type: types.CONNECT_BP3L_AGAIN,
      id: 8966,
      text: '重新连接血压计'
    })
  })

  it('disConnect should create DIS_CONNECT_BP3L action', () => {
    expect(actions.disConnect(8966)).toEqual({
      type: types.DIS_CONNECT_BP3L,
      id: 8966
    })
  })

  it('startMeasure should create START_MEASURE action', () => {
    expect(actions.startMeasure()).toEqual({
      type: types.START_MEASURE
    })
  })

  it('stopMeasure should create STOP_MEASURE action', () => {
    expect(actions.stopMeasure()).toEqual({
      type: types.STOP_MEASURE
    })
  })
})
