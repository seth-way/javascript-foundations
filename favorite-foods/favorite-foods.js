function createFavoriteFood(food) {
  return {
    name: food.dish,
    ingredients: food.ingredients,
    isSpicy: food.isSpicy,
    timesOrdered: 0,
  };
}

function commentOnSpiciness(food) {
  if (food.isSpicy) {
    return `Wow, this ${food.name} is so spicy!`;
  }

  return `Phew, this ${food.name} is not very spicy.`;
}

function orderFood(food) {
  food.timesOrdered += 1;
  return food;
}

function createShoppingList(foods) {
  const ingredients = [];

  var ingredient;
  for (let i = 0; i < foods.length; i += 1) {
    for (let j = 0; j < foods[i].ingredients.length; j += 1) {
      ingredient = foods[i].ingredients[j];
      if (!ingredients.includes(ingredient)) ingredients.push(ingredient);
    }
  }

  return ingredients;
}

module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList,
};
