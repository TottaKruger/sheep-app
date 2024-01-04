import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import CandyShop from './components/CandyShop';
import CandyInfo from './components/CandyInfo';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Route exact path="/" component={App} />
      <Route exact path="/candyshop" component={CandyShop} />
      <Route exact path="/candyinfo/:id" component={CandyInfo} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();