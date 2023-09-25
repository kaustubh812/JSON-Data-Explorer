const sample = require('./food.json');

// list all the food items
let foods = sample.map((items) =>{ 
          return items.foodname;
})
console.log(foods);

// list all the food items with category vegetables
function allVegetables(value) {
    return value.filter(item=> item.category === "Vegetable").map(item=>item.foodname)
}
const result1 = allVegetables(sample)
console.log(result1);

//list all the food items with category fruit
function allFruits(value) {
   return value.filter(item => item.category === "Fruit").map(item => item.foodname); 
}
const result2 = allFruits(sample);
console.log(result2);

// list all the food items with category protien
function allproteins(value) {
   return value.filter(item => item.category === "Protein").map(item => item.foodname);
}
const result3 = allproteins(sample);
console.log(result3);

//list all the food items with category nuts
function allNuts(value) {
  return value.filter(item => item.category === "Nuts").map(item => item.foodname);
}
const result4 = allNuts(sample);
console.log(result4);

// list all the food items with category grains
function allGrains(value) {
    return value.filter(item => item.category === "Grain").map(item => item.foodname);
}
const result5 = allGrains(sample);
console.log(result5);

// list all the food items with category dairy
function allDairy(value) {
  return value.filter(item => item.category === "Dairy").map(item => item.foodname);
}
const result6 = allDairy(sample);
console.log(result6);

// list all the food items with calorie above 100
function calorieAbove(value) {
   return value.filter(item => item.calorie >=100 ).map(item => item.foodname); 
}
const result7 = calorieAbove(sample);
console.log(result7);

// list all the food items with calorie below 100
function calorieBelow(value) {
   value.filter(item => item.calorie <= 100 ).map(item => item.foodname);
}
const result8 = calorieBelow(sample);
console.log(result8);

// list all the food items with highest protien content to lowest
function highestProtienToLow(value) {
    return value.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
  }
 const result9 = highestProtienToLow(sample);
console.log(result9);

//  list all the food items with lowest cab content to highest
function lowestCabToHigh(value) {
    return value.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);
  }
const result10 = lowestCabToHigh(sample);
console.log(result10);
  