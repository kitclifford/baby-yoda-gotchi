import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// import persistState from "redux-localstorage";

import initial from './data/initial';
import reducer from './data/reducer';



// const initial = {
//      name: '',
//      color: '',
//      age: 10,
//      health: 100,
//      submitted: false
// }

// const saveYoda = (state, action) => ({
//      ...state,
//      name: action.settings.name,
//      color: action.settings.colour,
//      submitted: true
// })

// const reducer = (state, action) => {
//      switch (action.type){

//           case "createYoda": return saveYoda(state, action);
//           default: return state;
//      }
// }

const composeEnhancers = 
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
     reducer, 
     initial,
     composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
     <Provider store={ store }>
     <App/>
     </Provider>,
     document.getElementById("root")
);