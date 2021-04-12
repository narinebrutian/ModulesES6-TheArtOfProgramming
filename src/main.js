import { pow, hypotenuse, circleArea } from "./math.js"
import { format } from "./format.js"

console.log(format("pow", pow(5, 9)));
console.log(format("hypotenuse", hypotenuse(8, 11).hypotenuse));
console.log(format("circleArea", circleArea(8)));