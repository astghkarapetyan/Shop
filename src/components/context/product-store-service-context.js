import { createContext } from 'react';

const {
    Provider:ProductsServicesProvider,
    Consumer:ProductsServicesConsumer
} = createContext();

export {
    ProductsServicesConsumer,
    ProductsServicesProvider
}