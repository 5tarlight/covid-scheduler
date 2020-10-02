import React from 'react'
import { TodoInputContainer, TodoListContainer } from '../containers'
import { TodoTemplate } from '../components'

const Start = () => {
  return (
    <>
      <TodoTemplate>
        <TodoInputContainer />
        <TodoListContainer />
      </TodoTemplate>
    </>
  )
}

export default Start
