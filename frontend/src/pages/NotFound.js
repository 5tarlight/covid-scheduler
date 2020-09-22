import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>페이지를 찾을 수 없습니다.</h1>
    <Link to='/'>돌아가기</Link>
  </div>
)

export default NotFound
