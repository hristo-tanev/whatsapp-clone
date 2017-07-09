import React from 'react'
import { Provider } from 'react-redux'

import App from './components/App'
import configureStore from './store'

const store = configureStore()

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main
