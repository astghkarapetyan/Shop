import { fetchMineStructure } from "../components/helpers";

class ProductRequestService {
    getAllProducts(){
       return fetchMineStructure('/all-products','GET',false)
    }
    addProduct(body,actionAddOneProduct){
      return  fetch('/add-product',{method:'POST',body})
            .then((response) => (
                response.json()
                    .then(json => (
                        response.ok ? json : Promise.reject(json)
                    ))
            ))
            .then(data=>{
                actionAddOneProduct(data)
            });


    }
    getAllCategories(){
        return fetchMineStructure('/all-categories','GET',false)
    }
}

export default ProductRequestService;