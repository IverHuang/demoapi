var express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/',function(req,res){
    connection.query('SELECT * FROM Fiverr WHERE ID = 3', function(err,data){
        if (err) throw err

       res.json(data)
      
          
    });
});

module.exports = router;