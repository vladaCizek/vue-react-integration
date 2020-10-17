import React from 'react'
import ReactDOM from 'react-dom'
import TestComponent from './React/TestComponent'

const Test = <TestComponent name="Vladislav" />

ReactDOM.render(
  Test,
  document.getElementById('root')
)