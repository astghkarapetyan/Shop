const multer = require('multer');
const upload = () =>{
    const storage = multer.diskStorage({
        destination:function (req,file,cb) {
            cb(null,'../src/uploads/')
        },
        filename:function (req,file,cb) {
            cb(null,`${file.originalname}`)
        }
    });

    return  multer({storage});
};

module.exports = {
    upload:upload()
};