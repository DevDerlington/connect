const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

res.sendFile(__dirname + "/")
});


app.post("/",(req,res)=>{
const fName = req.body.firstName;
const surname = req.body.surname;
const email = req.body.email;
const file = req.body.file;
const password = req.body.password;

res.write(" <h1>Your Name is  : </h1>" + fName);
res.write(" <h1>Your surname is :  </h1>" + surname);
res.write(" <h1>Your mail address  is : </h1>" + email);
res.write(" <h1>Your passport photograph  : </h1>" + file);
res.write(" <h1>Your password is : </h1>" + password);
res.send();


  
})
app.get("/about", (req,res)=>{
res.write(" <h1>My name is Anukan Iranlowo. A Student of Yabatech  : </h1>" );
  res.write(" <h1>My name is Anukan Iranlowo. A Student of Yabatech  : </h1>" );
res.write(" <h1>My name is Anukan Iranlowo. A Student of Yabatech  : </h1>" );
  res.send();
})


app.listen(3000, function(){
console.log("app is up and running !")

})
