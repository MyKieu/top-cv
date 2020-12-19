import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './contents/App';
import reportWebVitals from './reportWebVitals';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { translations } from 'translation/translation';
import store from 'contents/SavePDF/store';


let reducers = combineReducers(Object.assign({}, { Intl }))
ReactDOM.render(
     <Provider store={store}>
    <IntlProvider translations={translations} locale='vi'>
      <App />
    </IntlProvider>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
