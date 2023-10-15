//const {specialMenu, menu1} = require("./ingredient"); // . is the current directory, ./ingredient is the path to the file ingredient.js

// const myMenu = require("./ingredient");

// specialMenu();

// console.log(menu1);



//const Rabbit = require("./rabbit");
import Rabbit from "./rabbit.js";
import {menu1, specialMenu} from "./ingredient.js";

const rabbit1 = new Rabbit("Bugs Bunny", "Carrot");
console.log(rabbit1)

console.log(menu1);
specialMenu();