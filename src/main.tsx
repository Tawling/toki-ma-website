import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './i18n/config';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
