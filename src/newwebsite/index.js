import React from 'react';
import ReactDOM from 'react-dom';
import Website from './component/Website';
import '/reacttut/newhtml/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/reacttut/newhtml/node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from 'react-router-dom';
import './newwebsite/web.css';


ReactDOM.render(
  <>
  <BrowserRouter>
 
  <Website/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

