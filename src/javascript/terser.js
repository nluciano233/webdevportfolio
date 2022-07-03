// for instructions on how to write this file you can use the API reference of terser. It is inside terser documentation of its github repository https://github.com/terser/terser

const fs = require("fs");
const { minify } = require("terser");

const files = ["plane-wave.js"]; // put inside here all the files that you want to uglify

// read all the content from the files and organize them into a single string
function readFiles (files) {
  let data = [];
  files.forEach(e => {
    data.push(fs.readFileSync(require('path').resolve(__dirname, e)).toString());
  })

  data = data.join(' ');
  return data;
}

// pass the string with all the code into the uglifier and then write it to a file
async function uglify() {
  const filesData = await readFiles(files);

  var code = {
    "main.js": `${filesData}`
  };

  var result = await minify(code);

  fs.writeFile(`${__dirname}/../../public/javascripts/main.js`, result.code, function(err) {
    if (err) {
      console.log(err);
    }
  });
};

uglify();
