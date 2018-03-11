// Import the ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
// The variables cols and vals are arrays.
    create: function(name, cb) {
        orm.create("burgers", name, cb)
        },
    
    update: function(id, cb) {
        orm.update("burgers",id,cb);
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions
module.exports = burger;