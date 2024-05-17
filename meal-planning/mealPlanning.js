function createMeal(type, calorieGoal, dishes = []) {
  return { type, calorieGoal, dishes };
}

function addDish(meal, dish) {
  if (dish.calories < meal.calorieGoal) {
    meal.dishes.push(dish);
    meal.calorieGoal -= dish.calories;
  }
  return meal;
}

function calculateCalories(meal) {
  var calories = 0;
  for (let i = 0; i < meal.dishes.length; i += 1 ) {
    calories += meal.dishes[i].calories
  }
  return `${meal.type} has a total of ${calories} calories.`
}

module.exports = { createMeal, addDish, calculateCalories };
