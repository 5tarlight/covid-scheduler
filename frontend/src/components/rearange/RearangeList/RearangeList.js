import React, { Component } from 'react'
import { RearangeItem } from '../../'


class RearangeList extends Component {
  render() {
    const { todo } = this.props

    const result = todo.toJS().map(t => {
      return (
        <RearangeItem
          key={t.id}
          done={t.done}
        >
          {t.text}
        </RearangeItem>
      )
    })

    return (
      result
    )
  }
}

export default RearangeList
