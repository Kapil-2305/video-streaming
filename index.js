import express from "express"
import cors from "cors"

const app = express();

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