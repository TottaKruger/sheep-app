import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { legacy_createStore as createStore } from 'redux'
import candyReducer from './reducers/candyReducer'
import { Provider } from 'react-redux'

// skapa vår store utefter vår reducer (som har tagit in vårt initiala store)
const store = createStore(candyReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)