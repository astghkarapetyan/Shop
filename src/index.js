import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry'
import App from './App';
import { ProductsServicesProvider } from "./components/context";
import configureStore from './store';
import ProductStoreServices from './sercices';
const store = configureStore();
const productStoreService = new ProductStoreServices();
const Root = ()=>{
    return(
        <Provider store={store}>
            <ErrorBoundry>
                <ProductsServicesProvider value={productStoreService}>
                    <Router>
                        <App/>
                    </Router>
                </ProductsServicesProvider>
            </ErrorBoundry>
        </Provider>
    )
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

