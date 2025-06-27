//CLASS
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`the color is ${this.color}`);
  }
}

const rect = new Rectangle(10, 20, "red");
const area = rect.area();
const paint = rect.paint();
console.log(area);
console.log(paint);

const rect2 = new Rectangle(1, 2, "white");
const area2 = rect2.area();
const paint2 = rect2.paint();
console.log(area2);
console.log(paint2);

//some imp classes
const date = new Date();
console.log(date.getUTCDate());

const map = new Map();
map.set("name", "rohit");
map.set("age", 21);
console.log(map.get("age"), map.get("name"));

//promises
//setTimeoutPromisified(3000).then(callback)        setTimeout(callback,3000)
function waitfor3S(resolve){
  setTimeout(resolve, 1000)
}
function setTimeoutPromisified(){
  return new Promise(waitfor3S)
}
function main(){
  console.log("hello world!")
}
setTimeoutPromisified().then(main);


//
function random(){
  

}
const p = new Promise(random)
console.log(p)