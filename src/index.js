import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

//styles
import './index.css';

//local imports
import App from './App';
import store from './Store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <App />
    </Provider>
  
);

