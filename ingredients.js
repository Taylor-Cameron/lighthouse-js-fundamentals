var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
//define a variable = index 0
//while var < ingredient.length
//print ingredient array relating to var index defined
//work in succession from start to end
var list = 0;
while(list < ingredients.length) {
  console.log(ingredients[list]);
  list++;
}
// Write a for loop that prints out the contents of ingredients:
//define var = 0
//stop loop once ond of array is reached
//work in successsion from start to end
for(var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
// define var = to last index of array for ingredients
// loop that stops when var >= index of 0
// work in succession from end to start
for(var i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}
