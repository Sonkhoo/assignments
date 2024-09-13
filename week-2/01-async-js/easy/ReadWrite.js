import fs from 'fs'

fs.writeFile('hello.txt', 'Hello World !', (err) => {
  if (err) throw err;
})

fs.readFile('hello.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
