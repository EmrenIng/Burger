// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()

var connection = require("./connection.js");

var orm = {
    // Select All
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
                cb(result);
        });
    },
    // CREATE METHOD
    create: function(tableInput, val, cb) {
        connection.query(" INSERT INTO " +tableInput+
        " (burger_name) VALUES ('"+val+"');", function(err, result) {
            if (err) {
                throw err;
            }
                cb(result);
        });
    },
    // UPDATE METHOD
    update: function(tableInput, condition, cb){
        connection.query(" UPDATE " +tableInput+
        " SET devoured=true WHERE id=" +condition+ ";", function(err, result) {
            if (err) {
                throw err;
                cb(result);
            }
        })
    }
        


    // delete: function(table, condition, cb) {
    //     var queryString = "DELETE FROM " + table;
    //     queryString += " WHERE ";
    //     queryString += condition;
    
    //     connection.query(queryString, function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    
    //             cb(result);
    //     });
    // }
}

// Exporting Orm 
module.exports = orm;