const bcrypt = require('bcryptjs')
const colors = require('colors')

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("Fikri Arrasid", salt, function(err, hash) {
        console.log("password hash menjadi :", hash.green)
    });
});