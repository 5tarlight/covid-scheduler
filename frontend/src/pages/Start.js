import React from 'react'
import { TodoInputContainer, TodoListContainer } from '../containers'
import { TodoTemplate, RearangeBtn } from '../components'

const Start = () => {
  return (
    <>
      <TodoTemplate>
        <TodoInputContainer />
        <TodoListContainer />
      </TodoTemplate>
      <RearangeBtn />
    </>
  )
}

export default Start
