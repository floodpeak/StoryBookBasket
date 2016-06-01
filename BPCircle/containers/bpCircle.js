import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import BPCircle from '../components/bpCircle'
import * as DiscoveryConnectActions from '../actions/discoveryConnect'

class App extends Component {
  render() {
    const { bpUIState, actions } = this.props
    return (
      <div>
        <BPCircle bpUIState={bpUIState}  actions={actions}/>
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    bpUIState: state.bpUIState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DiscoveryConnectActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
