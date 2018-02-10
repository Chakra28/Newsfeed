const express = require('express');
const path=require('path');
const bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//uncomment following 3 lines at production build
//app.use(express.static(path.join(__dirname,'dist')));

//app.get('*' , (req,res) => {
//res.sendFile(path.join(_dirname,'dist','index.html'));    
//});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post("/api/user/login",(request,response)=>{
    const body=request.body;
    console.log(body);
  response.status(200).json({"message":"success"});
})
app.listen(3000, () => console.log('Example app listening on port 3000!'));