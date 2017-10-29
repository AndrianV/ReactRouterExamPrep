import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/routerX';

const RoutingDemo = () => (
    <BrowserRouter>
        <div>
            <App />
        </div>
    </BrowserRouter>
);

export default RoutingDemo;