let express = require('express')
let app = express()
let weather = require('weather-js');
app.set('view engine', 'ejs')

app.get('/',(req, res)=> {
    res.render('home')
})
app.get('/weather',(req, res)=> {
    let input = req.query.zipcode
    console.log('The input is ',input)

    weather.find({search: `${input}`, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        
        console.log(JSON.stringify(result, null, 2));
        res.render('results', {result:result})
      });
})


app.listen(process.env.PORT || 8000, ()=> {
    console.log('Hello')
})