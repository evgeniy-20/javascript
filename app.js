let string = 'some test string'; 
let value;
value = `${string[0].toUpperCase()}ome test strin${string[string.length -1].toUpperCase()}`
console.log(value);
console.log(string.indexOf('string'));
let position = string.indexOf(' ', string.indexOf(' ') + 1);
console.log(position);
console.log(string.slice(5,9));
console.log(Math.PI.toPrecision(3));
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
let number = Math.random();
console.log(number.toPrecision(2));
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
console.log(randomInteger(0, 9));
let nambers = 0.6 + 0.7;
console.log(nambers);
 let information = {
    product: "iPhone",
    price: "1000",
    currency: "dollar",
    details: "model",
 };
console.log(information);
function splitString(calculateChars, findMaxValue) {
    var arrayOfStrings = calculateChars.split(findMaxValue);
  
    console.log(calculateChars + '"');
    console.log(findMaxValue + '"');
    console.log(arrayOfStrings.length + arrayOfStrings.join(' / '));
  }
  
  var tempestString = 'gkfdgkfdlkbnbnfnbkfnbkfnbkfnkbnfkjbnfjnbknbjvcn';
  var monthString = 'дларлпрдордплорлдпорлпдорлдопдлроавлрокшщоршокитсттимситсмьтмиситлмстилпатиапооекавлд';
  
  var space = ' ';
  var comma = ',';
  
  splitString(tempestString, space);
  splitString(tempestString);
  splitString(monthString, comma);