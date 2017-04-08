const http = require('http');
const bl = require('bl');

http.get(process.argv[2], (res) => {
    // res.pipe(bl((err, data) => {
    //     if (err) console.error(err);

    //     let content = data.toString();
    //     console.log(content.length);
    //     console.log(content);
    // })
    res.setEncoding('utf8');
    let rowData = '';
    res.on('data', (chunk) => rowData += chunk);
    res.on('end', () => {
        console.log(rowData.length);
        console.log(rowData);
    });
})
.on('error', console.error);

