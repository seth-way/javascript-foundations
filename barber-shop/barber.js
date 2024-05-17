function createBarber(name, earnings = 0, haircuts = []) {
  return { name, earnings, haircuts };
}

function giveCompliment(haircut) {
  return `This ${haircut.style} looks great!`;
}

function cutHair(barber, haircut) {
  barber.haircuts.push(haircut);
  barber.earnings += haircut.price;
  return barber;
}

function listStyles(barber, cutLength) {
  var styleOptions = [];

  for (let i = 0; i < barber.haircuts.length; i += 1) {
    if (barber.haircuts[i].hairLength === cutLength) {
      styleOptions.push(barber.haircuts[i].style);
    }
  }
  
  return styleOptions;
}

module.exports = { createBarber, giveCompliment, cutHair, listStyles };
