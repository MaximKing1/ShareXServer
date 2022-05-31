const { extname } = require('path');
const { nameFunc } = require('./Functions/functionNameString');

module.exports = async function (app, opts, done) {
    app.post('/upload', function (req, res) {
      let data = await req.file() 
    const name = nameFunc(9);
    const file = data.file;
    const ext = extname(data.filename);
    const dir = '../Uploads';

      
  });
  done();
};
