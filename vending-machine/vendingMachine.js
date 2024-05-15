function createItemStock(name = 'unknown', quantity = 0, price = 1.0) {
  return { name, quantity, price };
}

// function collectChange(coins) {
//   var total = 0;

//   for (let i = 0; i < coins.length; i += 1) {
//     total += coins[i];
//   }

//   return total;
// }

function collectChange(coins) {
  return coins.reduce(function (acc, val) {
    return acc + val;
  }, 0);
}

function makePurchase(selectedItem, moneyForPurchase) {
  if (selectedItem.price > moneyForPurchase) {
    return `Sorry, you need at least $${~~selectedItem.price} to make that purchase`;
  }

  if (!selectedItem.quantity) {
    return 'Sorry, there are none left';
  }

  return `Here are your ${selectedItem.name}`;
}

module.exports = { createItemStock, collectChange, makePurchase };
