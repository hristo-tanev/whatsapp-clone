import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middleware = applyMiddleware(thunk)

export default function configureStore() {
  return createStore(reducers, middleware)
}
