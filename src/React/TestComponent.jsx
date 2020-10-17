import React from 'react'
import App from '../Vue/App.vue'
import Vue from 'vue'

const vm = new Vue({
  data: {
    name: 'Vlada'
  },
  render: h => h(App)
})

export default class TestComponent extends React.Component {
  super(props) {}
  componentWillMount() {

  }
  componentDidMount() {
    const ref = this.refs.vueApp
    vm.$mount(ref)
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>Starting Test</h2>
        <div id="vue-app" ref="vueApp"></div>
      </div>
    );
  }
}