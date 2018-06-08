var express = require('express');

var app = express();

app.set("views",__dirname+"/views");
app.set("view engine","ejs");

app.get('/',function(request,response){
response.send('<a href="/cats">Cats</a>')            
});  

app.get('/cats',function(request,response){
    cats=["cat1.jpeg","cat2.jpeg","cat3.jpg"]
    response.render("main",{cats:cats});
});

app.get('/cat1.jpeg',function(request,response){
    var gucci=[{name:"Gucci"},
        {favFod:"dray food"},
        {age:3},
        {sleepingSpots:["under bed","under coach"]},
        {link:"cat1.jpeg"}]
    response.render("detail",{cat:gucci});
});


app.get('/cat2.jpeg',function(request,response){
    var tuta=[{name:"Tuta"},
        {favFod:"dray and wetfood"},
        {age:1},
        {sleepingSpots:["over the bed","living room"]},
        {link:"cat2.jpeg"}];
    response.render("detail",{cat:tuta});
});

app.get('/cat3.jpg',function(request,response){
    var arya=[{name:"Arya"},
        {favFod:"chees and wetfood"},
        {age:2},
        {sleepingSpots:["in the tower","over the bed","living room"]},
        {link:"cat3.jpg"}];
    
    response.render("detail",{cat:arya});
});

app.use(express.static(__dirname+"/static"))
app.listen(8000,function(){
    console.log("listening on port 8000")
})
