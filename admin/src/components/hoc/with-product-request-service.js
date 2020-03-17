import React from 'react';
import { ProductsRequestConsumer} from "../context";

const withProductsRequestService = ()=>(Wrapped)=>{
    return (props)=>{
        return(
            <ProductsRequestConsumer>
                {
                    (productsStoreService)=>(
                        <Wrapped
                            {...props}
                            productsRequestService={productsStoreService}
                        />
                    )
                }
            </ProductsRequestConsumer>
        )
    }
};

export default withProductsRequestService