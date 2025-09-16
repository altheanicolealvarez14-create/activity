const sectionA = ["Anna", "Brian", "Charlie"];
const sectionB = ["Diana", "Ethan", "faith"];
const conbined = {Allstudent: [...sectionA, ...sectionB]};
console.log("conbined");

const car = {Car: "toyota corolla (2020)"};
const name = {Owner: "alex' Age: 30"};
console.log(car); 
console.log(name);

const grade = [75, 80, 90];
const squared = grade.map(n => n+5);
console.log(squared);

const updatedgrades = {grade, updatedgrade: [80, 85, 95]};
console.log(updatedgrades);