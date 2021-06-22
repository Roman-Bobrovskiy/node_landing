let chalk = require("chalk");
let express = require("express");
let app = express();
app.use(express.static("public"));
let PORT = 8083;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(chalk.bgBlue.italic(`Port: ${PORT}... `));
});
