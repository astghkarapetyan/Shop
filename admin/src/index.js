import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { ProductsRequestProvider } from "./components/context";
import ProductRequestService from './services';
import configureStore from './store';

import './index.css';
import App from './App';
const productRequestService = new ProductRequestService();
const store = configureStore();
const Index = ()=>{
    return(
        <Provider store={store}>
            <ProductsRequestProvider value={productRequestService}>
                <Router>
                    <App />
                </Router>
            </ProductsRequestProvider>
        </Provider>
    )
};

ReactDOM.render(<Index />, document.getElementById('root'));

