import React, { PropTypes, Component } from 'react'

class BPCircle extends Component {

  getStyle() {
    return {
      circle: {
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        border: '1px solid gray',
        background: '#4078c0'
      }
    }
  }

  renderStatus() {

    const { bpStatus } = this.props;
    const statusText = {
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: '200px'
    }

    return <div style={{...statusText}}>
      {bpStatus.text}
    </div>

  }

  render() {

    const styles = this.getStyle();
    const {bpHanderClick} = this.props;

    return <div style={styles.circle} onClick={bpHanderClick}>
      {this.renderStatus()}
    </div>
  }

}


BPCircle.propTypes = {
  bpStatus: PropTypes.object.isRequired,
  bpHanderClick: PropTypes.func.isRequired
}

export default BPCircle
