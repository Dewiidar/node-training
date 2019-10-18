var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

var skierTerms = [
    {
        term: 'term 1',
        defined: 'defined 1'
    },
    {
        term: 'term 2',
        defined: 'defined 2'
    },
    {
        term: 'term 3',
        defined: 'defined 3'
    }
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    console.log(`${req.method} method for ${req.url}`);
    next();
});

app.use(function (req, res, next) {
    console.log(`${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static('./public'));

app.use(cors()); // means any domain can use our api (add it before handling the requests)

app.get('/dictionary-api', function (req, res) {
    res.json(skierTerms);
});

app.post('/dictionary-api', function (req, res) {
    skierTerms.push(req.body);
    res.json(skierTerms);
});

app.delete('/dictionary-api/:term', function (req, res) {

    console.log(req.params.term);

    skierTerms = skierTerms.filter(function (definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });

    res.json(skierTerms);

}); // ":term" means whatever is sent after the / is a routing variable and will be available under req.params

app.listen(3000);

console.log("Express running on port 3000");

