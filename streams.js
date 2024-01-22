const fs = require('fs');

// let str = ""
// for (let i = 0; i < 5000; i++) {
//     str = str + "\nhow are you?"
// }
// fs.writeFile('./blog.txt', str, () => { })

const readStream = fs.createReadStream('./blog.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./blog2.txt', { encoding: 'utf8' })

// readStream.on('data', (chunk) => {
//     console.log("---chunk---");
//     console.log(chunk);
//     writeStream.write('\nchunk\n');
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream);