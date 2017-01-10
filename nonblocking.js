var fs = require('fs');

fs.readFile('food.txt', 'utf8', function(error, food){
  if(error){
    console.log(error);
    return;
  }

  console.log('FOOD');
  console.log(food);
});

fs.readFile('drinks.txt', 'utf8', function(error, drinks){
  if(error){
    console.log(error);
    return;
  }

  console.log('DRINKS');
  console.log(drinks);
});
