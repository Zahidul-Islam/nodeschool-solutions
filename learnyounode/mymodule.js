const fs = require('fs');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
       if (err) return callback(err);
       const filtered = files.filter(x => x.endsWith('.' + ext));
       callback(null, filtered);        
    });    
};

