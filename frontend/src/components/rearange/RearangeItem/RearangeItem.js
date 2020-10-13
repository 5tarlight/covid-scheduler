import React, { Component } from 'react'
import Draggable from 'react-draggable'
import styles from './RearangeItem.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

class RearangeItem extends Component {
  state = {
    height: 36
  }

  componentDidMount() {
    this.setState({
      height: this.thisComponent.clientHeight
    })
  }

  render() {
    const { done, children } = this.props
    const handleStop = () => {
      console.log('save')
    }

    return (
      <Draggable
        axis='y'
        grid={[1, this.state.height]}
        onStop={handleStop}
      >
        <div className={cx('todo-item', 'no-drag')} ref={ ref => this.thisComponent = ref }>
          <input className={cx('tick')} type='checkbox' checked={done} readOnly />
          <div className={cx('text', 'no-drag',{ done })}>{children}</div>
        </div>
      </Draggable>
    )
  }
}

export default RearangeItem
