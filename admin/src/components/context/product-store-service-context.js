import { createContext } from 'react';

const {
     Provider:ProductsRequestProvider,
     Consumer:ProductsRequestConsumer,
} = createContext();

export {
    ProductsRequestConsumer,
    ProductsRequestProvider
}