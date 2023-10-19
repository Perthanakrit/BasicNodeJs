const express = require('express');
const chalk = require('chalk'); // chalk is a package to color the text in the console
const debug = require('debug')('app'); // debug is a package to debug the code
const morgan = require('morgan'); // morgan is a package to log the request in the console
const path = require('path'); // path is a package to get the path of the file

const app = express();
const PORT = process.env.PORT;

app.use(morgan("combined")); // .use is the method to use the package, combined is the format of the log in the console
// express.static is the method to use the static file,
// __dirname is the path of the current file, "/public" is the folder name of the static file
app.use(express.static(path.join(__dirname, "/public/"))); 

app.set('views', __dirname + '/src/views');// .set is the method to set the view engine
app.set('view engine', 'ejs');

app.get("/", (req,res) => { // "/" is the root path, .get is the method to get the data from the server
    // req is the request from the client
    res.render('index', {username: "PerTRA",  cutomers:["a","b","c"]}); // res is the response from the server
}) 



app.listen(PORT, () => { // .listen is the method to listen to the port 3002 and run the server on that port 
    debug(`Server is running on port ${chalk.green(PORT)}`);
})