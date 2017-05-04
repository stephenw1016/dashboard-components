let path = require('path');

let rootPath = [path.resolve(__dirname, '..')];

exports.root = (...paths) => path.join(...rootPath.concat(paths));


