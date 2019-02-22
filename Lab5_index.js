var express = require('express')
var app = express()
app.use(express.static(__dirname + '/image'));
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/computer', function(req, res){
   res.render('computer', {computer: [{title:'Windows',image:"Windows.jpg"},
   								{title:'OSX',image:"OSX.jpg"},
   								{title:'Android',image:"Android.jpg"},
   								{title:'IOS',image:"IOS.jpg"} ] , foo: '007'})
})
app.listen(8000)
