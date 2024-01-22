const fs = require('fs');


// fs.readFile('./text.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(data.toString());
// })

if (!fs.existsSync('./text.txt')) {

    fs.writeFile('./text.txt', "hello world", () => {
        console.log("written");
    })
}
else {
    fs.unlink('./text.txt', () => {
        console.log("deleted file");
    })
}


if (!fs.existsSync('./folder')) {
    fs.mkdir('./folder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    })
}
else {
    fs.rmdir('./folder', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("removing folder");
    })
}