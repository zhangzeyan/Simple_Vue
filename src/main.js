// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  data: {
    title: '你好，Vue',
    subtitle: '你好，subtitle',
    showSubtitle: true,
    mytodo: '',
    todos: [
      {text: '吃饭', done: false},
      {text: '睡觉', done: false},
      {text: '写代码', done: false}
    ]
  },
  methods: {
    handleClick () {
      this.todos.push({text: this.mytodo, done: false})
      this.mytodo = ''
    },
    toggle (i) {
      this.todos[i].done = !this.todos[i].done
    },
    cleanClick () {
      this.todos = this.todos.filter(v => !v.done)
    }
  },
  computed: {
    remain () {
      return this.todos.filter(v => v.done).length
    }
  }
})
