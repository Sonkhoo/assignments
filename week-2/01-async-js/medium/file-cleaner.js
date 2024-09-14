import fs from 'fs';
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let newData = data.trim().split(/\s+/).join(' ');
    fs.writeFile('file.txt', newData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})

