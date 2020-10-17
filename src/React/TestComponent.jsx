import React from 'react'

const vm = new Vue({
  data: {
    name: 'Vlada'
  },
  render(h) {
    return h('div', {
      'class': 'is-red'
    }, [
      h('p', 'Vue Instance'),
    ])
  }
})

export default class TestComponent extends React.Component {
  super(props) {}
  componentWillMount() {

  }
  componentDidMount() {
    console.log('did  mount? ', vm)
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