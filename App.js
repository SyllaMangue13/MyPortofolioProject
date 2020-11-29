
const express = require("express")
const path = require("path");
const fs = require("fs");


const app = express()
app.set('view engine', 'ejs');
app.use('*/css',express.static('public/css'));
app.use('*/image',express.static('public/image'));
app.use('*/JS',express.static('public/JS'));
app.use('*/pdfs',express.static('public/pdfs'));





const dirPath = path.join(__dirname, "public/pdfs");

// Displaying / oppening My pdf
const files = fs.readdirSync(dirPath).map(name => {
  return {
    name: path.basename(name, ".pdf"),
    url: `/pdfs/${name}`
  };
});


app.get("/", (req, res) => {
    res.render("home", { files });
  });
  

//  Downloafding PDF
// app.get('/download',function(req,res){
//     res.download("./file/ma-sy.pdf");
    
// });




app.listen(5000,function(){
    console.log("server is runig on 5000")
})