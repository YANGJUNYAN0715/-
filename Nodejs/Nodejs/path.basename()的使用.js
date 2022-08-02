const path = require("path");
var fullname = path.basename(__filename, ".js");
console.log(fullname);

const fext = path.extname(__filename);
console.log(fext);
