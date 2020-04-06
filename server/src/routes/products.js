const express = require('express');
const router = new express.Router();
const connection = require('../db_connection');
const multer = require('multer');
const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,'../src/uploads/')
    },
    filename:function (req,file,cb) {
        cb(null,`${file.originalname}`)
    }
});

const upload = multer({storage:storage});
router.get('/all-products',(req,res)=>{

    connection.query("SELECT * FROM products ORDER BY product_id DESC LIMIT 10 OFFSET 10",(err,row,feilds)=>{
        if(err) return console.log(err,'error query');
        res.status(200).send(row)
    })
});
router.get('/all-products/:id',(req,res)=>{
    const id = Number(req.params.id);
    connection.query(`SELECT p.* 
                        FROM products as p 
                        INNER JOIN category_name as c
                        ON p.category_name_id = ${ id }
                        GROUP BY p.product_id
                       
                     `,(err,row,feilds)=>{
        if(err) return res.status(404).send(err);
        res.status(200).send(row)
    })
});
router.get('/product/:id',(req,res)=>{
    const id = Number(req.params.id);
    connection.query(`SELECT * 
                        FROM products as p
                        WHERE p.product_id = ${id}
                     `,(err,row,feilds)=>{
        if(err) return res.status(404).send(err);
        res.status(200).send(row)
    })
});
router.post('/add-product',upload.array('images',(req)=>req.files.length),async(req,res)=>{
    const { body } = req;
    const images = [];
    req.files.map(item=>images.push(item.filename));
    const bodyKeys = Object.keys(body);
    const bodyValues = Object.values(body);
    bodyKeys.push('images');
    bodyKeys.push('status');
    let keys = '';
    let values = '';
    bodyKeys.map(item=>{
        keys += `${item},`;
    });
    bodyValues.map(item=>{
        values += `'${item}',`;
    });

    keys = keys.slice(0,keys.length - 1);
    values += `'${JSON.stringify(images)}',`;
    values += '1';
    let query = `INSERT INTO products (${keys} ) VALUES(${values})`;
    console.log(query,'queryqueryquery')
    connection.query(query,(err,row,feilds)=>{
        if(err) return console.log(err,'error query')
        body.images = JSON.stringify(images);
        body.product_id = row.insertId;
        res.status(200).send(body)
    })
});

router.get('/all-categories',(req,res)=>{
    connection.query("SELECT * FROM category_name",(err,row,feilds)=>{
        if(err) return console.log(err,'error query');
        const categories = {
          categoryName:row
        };
        res.status(200).send(categories)
    })
});

module.exports = router;