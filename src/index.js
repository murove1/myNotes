import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { addNote, addLabel } from './actions';
import Layout from './components/Layout/Layout';

store.dispatch(
  addNote({
    title: '1',
    text: 'test',
    color: '#FFF',
    labels: ['test']
  })
);
store.dispatch(
  addNote({
    title: '2',
    text: 'test2',
    color: '#FECB00',
    labels: ['lorem']
  })
);
store.dispatch(addLabel('test11'));
store.dispatch(addLabel('test'));
store.dispatch(addLabel('lorem'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
