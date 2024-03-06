import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>Oops Something Went Wrong 😢</h3>
      <h4>{err.data}</h4>
    </div>
  )
}

export default ErrorElement
