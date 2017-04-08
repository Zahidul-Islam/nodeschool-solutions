const fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
    if (err) throw new Error('Error reading file');

    const filtered = files.filter(x => x.endsWith('.' + process.argv[3]));
    filtered.map(x => console.log(x));
});

