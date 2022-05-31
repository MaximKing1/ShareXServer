const { extname } = require('path');
const { nameFunc } = require('./Functions/functionNameString');
const { decode } = require('./Functions/decodeBase64');
const { writeFile } = require('fs');

module.exports = async function (app, opts, done) {
    app.post('/upload', function (req, res) {
    const data = await req.file() 
    const name = nameFunc(9);
    const file = decode(data.file);
    const ext = extname(data.filename);
    const dir = '../Uploads';

      writeFile(`${dir}/${name}${ext}`, file.data, function (err) { 
        console.error(err)
      });
  });
  done();
};
