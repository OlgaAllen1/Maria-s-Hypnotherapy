import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Layout from './pages/layout/container.js'
import { Provider} from 'react-redux'
import store from './pages/store'


ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
