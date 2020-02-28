import React from 'react';
import { ProductsServicesConsumer } from "../context";

const withProductsStoreService = ()=>(Wrapped)=>{
        return (props)=>{
            return(
                    <ProductsServicesConsumer>
                        {
                            (productsStoreService)=>(
                                <Wrapped
                                    {...props}
                                    productsStoreService={productsStoreService}
                                />
                            )
                        }
                    </ProductsServicesConsumer>
                )

    }
};

export default withProductsStoreService