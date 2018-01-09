import { createStore, compose } from 'redux'

export default createStore((state, action) => {
  return {
    hello: 'world'
  }
}, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))