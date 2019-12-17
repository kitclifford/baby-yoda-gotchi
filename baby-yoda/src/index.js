import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import persistState from "redux-localstorage";

const initial = {
     name: '',
     color: '',
     age: 0,
     health: 0,
     submitted: false
}

const saveYoda = ( state, action ) => ({
     ...state,
     name: action.settings.name,
     color: action.settings.color,
     submitted: action.settings.submitted,
})

const reducer = (state, action) => {
     switch (action.type){

          case "createYoda": return saveYoda(state, action);
          default: return state;
     }
}

const composeEnhancers = 
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
     reducer, 
     initial,
     composeEnhancers(persistState())
);

ReactDOM.render(
     <Provider store={ store }>
     <App/>
     </Provider>,
     document.getElementById("root")
);