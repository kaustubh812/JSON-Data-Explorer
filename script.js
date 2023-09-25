let foodinfo = require('./food.json')

let all = foodinfo.forEach(element => {
    console.log(element)
});




let Vegetable = foodinfo.filter((item) =>{
    if (item.category == "Vegetable") console.log(item);
});




let fruit = foodinfo.filter((item) =>{
    if (item.category == "Fruit") console.log(item);
});



let protein = foodinfo.filter((item) =>{
    if(item.category == "Protein") console.log(item);
});



let nuts = foodinfo.filter((item) =>{
    if(item.category == "Nuts") console.log(item);
});



let grains = foodinfo.filter((item) => {
    if (item.category == "Grain") console.log(item);
});



let dairy = foodinfo.filter((item) =>{
    if (item.category == "Dairy") console.log(item);
});



let calorie_above = foodinfo.filter((item) => {
    if (item.calorie > 100) console.log(item);
});



let calorie_below = foodinfo.filter((item) => {
    if(item.calorie < 100) console.log(item);
});



function highest() {
    foodinfo.sort((a, b) => b.protiens - a.protiens);
    foodinfo.forEach((item) => {
      console.log(item);
    });
  }
  highest()

  
  function lowest() {
    foodinfo.sort((a, b) => a.cab - b.cab);
    foodinfo.forEach((item) => {
      console.log(item);
    });
  }
  lowest()