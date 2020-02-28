
class ProductStoreServices{
    state = {
        men:[
            {
                id:1,
                name:'CAMP TRAIL',
                price:'77.00',
                img:['productMenImg1.webp','productMenImg2.webp']
            },
            {
                id:2,
                name:'CAMP TOPO',
                price:'79.00',
                img:['productMenImg1.webp','productMenImg2.webp']
            },
            {
                id:3,
                name:'CAMP MESA',
                price:'78.00',
                img:['productMenImg1.webp','productMenImg2.webp']
            },
            {
                id:4,
                name:'CANBY ACTV',
                price:'149.00',
                img:['productMenImg1.webp','productMenImg2.webp']
            },
            {
                id:5,
                name:'MONROE ACTV',
                price:'160.00',
                img:['productMenImg1.webp','productMenImg2.webp']
            }
            ,
            {
                id:6,
                name:'RILEY ACTV',
                price:'155.00',
                img:['productMenImg1.webp','productMenImg2.webp']
            }
            ],
        women:[
            {
                id:1,
                name:'CANBY WOOD ',
                price:'85.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            {
                id:2,
                name:'KINSROW WOOD ',
                price:'102.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            {
                id:3,
                name:'ARLENE ACETATE ',
                price:'96.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            {
                id:4,
                name:'CANBY ACETATE ',
                price:'75.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            {
                id:5,
                name:'CANBY WOOD ',
                price:'85.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            {
                id:6,
                name:'FRANCIS ACETATE',
                price:'105.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            {
                id:7,
                name:'KINSROW ACETATE',
                price:'130.00',
                img:['productWommenImg1.jpg','productWommenImg2.jpg']
            },
            ]
    };
    getProducts(categoryName){
        console.log(categoryName,'dddddddd')
        return new Promise((res)=>{
            setTimeout(()=>res(this.state[categoryName]),2000)
        })
    }
}
export default ProductStoreServices;