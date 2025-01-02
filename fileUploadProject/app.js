const express = require('express');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    //Dosyaların nereye kaydedileceği ve dısya isimlerinin nasıl tutulacagını belirleriz
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.set('view engine', 'ejs');


app.post("/upload", upload.single('image') , (req,res)=>{
res.send('image uploaded');
})

app.get('/upload', (req,res)=>{
    res.render('upload');
})

app.get('/download/:filename',(req,res)=>{
    const filename=req.params.filename;
    const filepath=path.join(__dirname,'images'+filename);

    res.download(filepath,(err)=>{
        if(err){
            res.status(404).send('dosya bulunamadı');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);

})

