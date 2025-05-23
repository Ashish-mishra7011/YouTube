import multer from 'multer'

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null,"./public/temp")        //cb stands for call back  function which we use for middleware
    },
    filename: function(req,file,cb){

        cb(null,file.originalname)

    }
})

export const upload =multer({storage})