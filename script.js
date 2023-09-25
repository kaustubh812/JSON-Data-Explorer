let foodinfo = require('./food.json')

//list all the food items
let all = foodinfo.forEach(element => {
    console.log(element)
});


//list all the food items with category vegetables
let Vegetable = foodinfo.filter((item) =>{
    if (item.category == "Vegetable") console.log(item);
});



//list all the food items with category fruit
let fruit = foodinfo.filter((item) =>{
    if (item.category == "Fruit") console.log(item);
});


//list all the food items with category protien
let protein = foodinfo.filter((item) =>{
    if(item.category == "Protein") console.log(item);
});


//list all the food items with category nuts
let nuts = foodinfo.filter((item) =>{
    if(item.category == "Nuts") console.log(item);
});


//list all the food items with category grains
let grains = foodinfo.filter((item) => {
    if (item.category == "Grain") console.log(item);
});


//list all the food items with category dairy
let dairy = foodinfo.filter((item) =>{
    if (item.category == "Dairy") console.log(item);
});


//list all the food items with calorie above 100
let calorie_above = foodinfo.filter((item) => {
    if (item.calorie > 100) console.log(item);
});


//list all the food items with calorie below 100
let calorie_below = foodinfo.filter((item) => {
    if(item.calorie < 100) console.log(item);
});


//list all the food items with highest protien content to lowest
function highest() {
    foodinfo.sort((a, b) => b.protiens - a.protiens);
    foodinfo.forEach((item) => {
      console.log(item);
    });
  }
  highest()

  
  //list all the food items with lowest cab content to highest
  function lowest() {
    foodinfo.sort((a, b) => a.cab - b.cab);
    foodinfo.forEach((item) => {
      console.log(item);
    });
  }
  lowest()