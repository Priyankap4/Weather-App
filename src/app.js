const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_Path = path.join(__dirname,"../public");
app.use(express.static(static_Path));

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

// routing
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render(`404error`,{
        errorMsg: `Opps! Page Not Found, Click hereto go back!`
    });
})

app.listen(port,()=>{
    console.log(`the server is running at ${port}`);
})