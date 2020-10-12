import React, { Component } from 'react'
import { RearangeItem } from '../../'


class RearangeList extends Component {
  render() {
    const { todo } = this.props

    const result = todo.map(t => {
      console.log(t.get('id'), t.get('done'), t.get('text'))
      return (
        <RearangeItem
          key={t.get('id')}
          done={t.get('done')}
        >
          {t.get('text')}
        </RearangeItem>
      )
    })
    
    return (
      {result}
    )
  }
}

export default RearangeList
