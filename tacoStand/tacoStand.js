function createIngredient(name = 'unknown', price = 0.00) {
  return { name, price };
}

function createTaco(name = 'custom', ingredients = []) {
  return {
    name,
    ingredients,
  };
}

function addIngredientToTaco(taco, ingredient) {
  if (ingredient) taco.ingredients.push(ingredient);
  return taco;
}

function calculatePrice(taco) {
  var price = 0;

  for (let i = 0; i < taco.ingredients.length; i += 1) {
    price += taco.ingredients[i].price;
  }

  return price;
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice,
};
