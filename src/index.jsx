import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import reducers from './main/reducers'
import { createStore } from 'redux'
import { Provider } from "react-redux";

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
</Provider>, document.getElementById('app')) 