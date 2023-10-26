# **NodeJs**

## require & exports

## import & export

> **_Diffent_**  
> require in CommonJS (Old Gen) **_|_** import in ES6 (New Gen)

## npm scripts

package.json

    "scripts": {
        "start": "set DEGUP-DEBUG=app & node ./ExpressJS/app.js", // add script
    	"debug": "set DEGUP-DEBUG=* & node node ./ExpressJS/app.js", // add script
        "test": "echo \"Error: no test specified\" && exit 1"
    },

## nodemon

    npm i nodemon

package.json

    //write script
    "nodemonConfig": {
        "restartable": "rs",
    	"delay": 2000
    }
    "scripts": { "start": "set DEGUP-DEBUG=app & nodemon ./ExpressJS/app.js", // edit node	-> nodemon
    			"debug": "set DEGUP-DEBUG=* & nodemon ./ExpressJS/app.js",
    			"test": "echo \"Error: no test specified\" && exit 1" },

##

### EJS

    npm install ejs

### Express routing

[More about express routing](https://expressjs.com/en/guide/routing.html)

    const  projectRouter  =  express.Router();

    projectRouter.route("/").get((req,res) => {
    	res.render('projects',projects);
    }) // .route is the method to set the path of the middleware
    app.use("/projects", projectRouter);
