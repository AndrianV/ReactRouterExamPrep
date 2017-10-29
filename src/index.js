import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoutingDemo from './RoutingDemo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RoutingDemo />, document.getElementById('root'));
registerServiceWorker();
