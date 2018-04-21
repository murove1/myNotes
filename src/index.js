import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Layout from './components/Layout/Layout';
import store from './modules/store';

ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter basename="/myNotes"> --> for deploy github-page */}
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
