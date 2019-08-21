const Express = require('express');

var app = new Express();

app.set('view engine','ejs'); 

app.use(Express.static(__dirname+"/public"));

app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/books',(req,res)=>{
    res.render('books',{book,title:'Books'});
});

app.get('/addbook',(req,res)=>{
    res.render("addbook");

});

app.get('/authors',(req,res)=>{
    res.render('authors',{author,title:'Authors'});
});

app.get('/signup',(req,res)=>{
    res.render("signup");
});
app.get('/login',(req,res)=>{
    res.render("login");
});
app.listen(process.env.PORT || 3214,()=>{
    console.log("Server is working...3214..!");
})