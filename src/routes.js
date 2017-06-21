import React from 'react';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
);

//<Route path="*" component={NotFound} /
export default Routes;