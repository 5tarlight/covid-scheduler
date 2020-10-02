import React from 'react'
import { TodoInput, TodoTemplate } from '../components'
import TodoList from '../components/todo/TodoList/TodoList'

const Start = () => {
  return (
    <>
      <TodoTemplate>
        <TodoInput />
        <TodoList />
      </TodoTemplate>
    </>
  )
}

export default Start
