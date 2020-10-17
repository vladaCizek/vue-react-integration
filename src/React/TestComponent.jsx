import React from 'react'
import App from '../Vue/App.vue'
import Vue from 'vue'
import store from '../Vue/store'
// import router from '../Vue/router'
import i18n from '../Vue/I18n'

const vm = new Vue({
  data: {
    name: 'Vlada'
  },
  i18n,
  store,
  // router,
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
        <h2>I'm a React Component</h2>
        <div id="vue-app" ref="vueApp"></div>
      </div>
    );
  }
}