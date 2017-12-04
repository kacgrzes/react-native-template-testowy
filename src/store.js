import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

// import reducers here
import products from 'ducks/products'
import orders from 'ducks/orders'
import clients from 'ducks/clients'
import channels from 'ducks/channels'
import dashboard from 'ducks/dashboard'
import channelProducts from 'ducks/channelProducts'
import search from 'ducks/search'
import todos from 'ducks/todos'
import blogFeed from 'ducks/blogFeed'

const appReducer = combineReducers({
  products,
  orders,
  clients,
  channels,
  dashboard,
  channelProducts,
  search,
  todos,
  blogFeed
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_DATA') {
    state = undefined
  }

  return appReducer(state, action)
}

let middlewares = []

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    ...middlewares
  )
)

export default store
