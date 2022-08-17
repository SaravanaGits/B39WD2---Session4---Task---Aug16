//How to compare two JSON having the same properties but in different order vs same order

//output is false for below:

var obj1 = { name: "person 1", age: 5 };
var obj2 = { age: 5, name: "person 1" };
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

var obj3 = { name: "person2", age: 10 };
var obj4 = { name: "person3", age: 10 };
console.log(JSON.stringify(obj3) === JSON.stringify(obj4));

//output is true for below:

var obj5 = { name: "person4", age: 15 };
var obj6 = { name: "person4", age: 15 };
console.log(JSON.stringify(obj5) === JSON.stringify(obj6));