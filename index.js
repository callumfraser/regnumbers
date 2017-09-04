var express = require('express');
var bodyParser = require('body-parser');
var express_handlebars = require('express-handlebars');
var app = express();

var mongoose = require('mongoose');

var port = process.env.PORT || 3001;


const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/regPlatesDB"
mongoose.connect(mongoURL);

var Schema = mongoose.Schema;

var plateStartCode;

var plateSchema = Schema({
    code: String,
});


var regPlates = mongoose.model("regPlates", plateSchema);


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('./public'));

app.use(bodyParser.json());

app.engine('handlebars', express_handlebars({
    extname: '.handlebars',
    layoutsDir: 'reg-numbers-webapp/views/layouts'
}));

app.set('view engine', 'handlebars');


app.get('/', function(req, res, next) {
  res.redirect('/reg_numbers')
})

app.get('/reg_number/:plateValue', function(req, res, next) {
    var plateCode = req.params.plateValue;
    console.log(plateCode)
    res.render("one-reg-number", {
        plateCode
    })
});

app.get('/reg_numbers', function(req, res, next) {
  var query = {
      "code": new RegExp('^' + plateStartCode)
  };
  regPlates.find(query, function(err, results) {
      if (err) {
          return next(err)
      } else {
          plates = results
      }
      console.log(plates)
    res.render('reg-numbers-form', {
        plates: plates
    });
  });
})

app.post('/reg_numbers', function(req, res, next) {
  var filterButton = req.body.filterButton;
  var addButton = req.body.addButton;
  var clearDB = req.body.clearDB;
  if (req.body.townFilter == "AllTowns") {
      plateStartCode = "C"
  } else if (req.body.townFilter == "CapeTown") {
      plateStartCode = "CA"
  } else if (req.body.townFilter == "Bellville") {
      plateStartCode = "CY"
  } else if (req.body.townFilter == "Paarl") {
      plateStartCode = "CJ"
  }
  var addButton = req.body.addButton;

    if (addButton && (req.body.regNumberInput !== "") && (req.body.regNumberInput.length < 11)) {
      regPlates.findOne({code:req.body.regNumberInput.substr(0,2).toUpperCase() + req.body.regNumberInput.substr(2)}, function(err,regSearch){
       if(err){
         return next(err);
       } else if (!regSearch){

        var newPlate = new regPlates({
            code: req.body.regNumberInput.substr(0,2).toUpperCase() + req.body.regNumberInput.substr(2)
        });

        newPlate.save(function(err) {
            if (err) {
                return next(err);
            }
        })
      } else if (regSearch){
        console.log("duplicate plate")
      }
    })
    }
    else if (clearDB){
      regPlates.remove({}, function(err) {
          if (err) {
              return console.log(err)
          }
        });
      }
    res.redirect('/reg_numbers')
});



app.listen(port, '0.0.0.0', function() {
    console.log("App listening on port")
});
