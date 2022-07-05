// for instructions on how to write this file you can use the API reference of terser. It is inside terser documentation of its github repository https://github.com/terser/terser

const fs = require("fs");
const { minify } = require("terser");

const files = ["plane-wave.js", "sphere.js"]; // put inside here all the files that you want to uglify

// read all the content from the files and return them into an array
function readFiles (files) {
  let data = [];
  files.forEach(e => {
    data.push(fs.readFileSync(require('path').resolve(__dirname, e)).toString());
  })

  return data;
}

// pass the string with all the code into the uglifier and then write it to a file
async function uglify(files) {
  const filesData = await readFiles(files);
  
  filesData.forEach( async (e, i) => {

    var code = {};
    code[files[i]] = `${e}`

    var result = await minify(code);

    fs.writeFile(`${__dirname}/../../public/javascripts/${files[i]}`, result.code, function(err) {
      if (err) {
        console.log(err);
      }
    });
  });

};

uglify(files);
