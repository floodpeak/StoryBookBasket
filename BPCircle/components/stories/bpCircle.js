import React from 'react';
import BPCircle from '../bpCircle';
import { storiesOf, action } from '@kadira/storybook';



storiesOf('BPCircle', module)
  .add('Init Status', () => {
    const state = {
      status: 'disconnect',
      text: '点击搜索血压计'
    }
    return (
      <BPCircle
        bpStatus={ state }
        bpHanderClick={ action('startDiscovery') } />
    )
  })
  .add('Start Discovery', () => {
    const state = {
      status: 'searching',
      text: '正在搜索血压计'
    }
    return (
      <BPCircle
        bpStatus={ state }
        bpHanderClick={ action('stopDiscovery') } />
    )
  })
  .add('Discovery Failure', () => {
    const state = {
      status: 'searching_failure',
      text: '未找到设备, 请重试'
    }
    return (
      <BPCircle
        bpStatus={ state }
        bpHanderClick={ action('startDiscovery') } />
    )
  })
  .add('Start Connect', () => {
    const state = {
      status: 'connecting',
      text: '正在连接血压计'
    }
    return (
      <BPCircle
        bpStatus={ state }
        bpHanderClick={ action('null') } />
    )
  })
  .add('ConnectSuccess', () => {
    const state = {
      status: 'ready',
      text: '开始测量'
    }
    return (
      <BPCircle
        bpStatus={ state }
        bpHanderClick={ action('startMeasure') } />
    )
  })
  .add('ConnectFailure', () => {
    const state = {
      status: 'connect_failure',
      text: '血压计连接失败，请重试'
    }
    return (
      <BPCircle
        bpStatus={ state }
        bpHanderClick={ action('startConnect') } />
    )
  })
