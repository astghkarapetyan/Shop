import React  from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { productsTh } from "../../helpers";
import './all-products.css';
const AllProductsList = ({products})=>{
    const keys = Object.keys(productsTh);
    return (

        <div className='all-products-list-container'>
            <Table striped bordered hover>
                <thead>
                <tr>
                    {
                        keys.map(th=>(
                            <th key={th}>{productsTh[th]}</th>
                        ))
                    }
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>

                    {
                        products.map(product=>(
                            <tr key={product.product_id}>
                                {
                                    keys.map(td => (
                                        <td className={td} key={`${product.product_id}${td}`}>
                                            {
                                                td === 'images' ? (
                                                    <div className='products-images'>
                                                        <img src={require(`../../../../../src/uploads/${JSON.parse( product[td])[0]}`)} />
                                                    </div>
                                                ): (
                                                    product[td]
                                                )
                                            }

                                        </td>
                                    ))
                                }
                                <td className='actions'>
                                    <Button variant="warning">Edit</Button>
                                    <Button variant="danger">Delete</Button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
};

export default AllProductsList;