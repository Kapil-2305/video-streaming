import express from "express"
import cors from "cors"
import multer from "multer"

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "./uploads")
    },
    filename: function(req, file, cb){
      cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname))
    }
  })

app.use(
    cors({
      origin: ["http://localhost:3000", "http://localhost:5173"],
      credentials: true
    })
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") // watch it
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next()
});

app.listen(8000, function(){
    console.log("App is listening at port 8000...")
})