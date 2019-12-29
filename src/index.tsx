import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import './index.css';
import { unregisterServiceWorker } from './utils';

ReactDOM.render(<App />, document.getElementById('root'));

unregisterServiceWorker();
