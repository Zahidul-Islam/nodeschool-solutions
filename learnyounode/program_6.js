//program.js
const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, files) => {
    if (err) throw new Error('Error reading file');

    files.map(x => console.log(x));
});


//mymodule.js
const fs = require('fs');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
       if (err) return callback(err);
       const filtered = files.filter(x => x.endsWith('.' + ext));
       callback(null, filtered);        
    });    
};
