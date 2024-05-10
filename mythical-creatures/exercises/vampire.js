function createVampire(name, pet = 'bat') {
  return {
    name,
    pet,
    thirsty: true,
    ouncesDrank: 0,
  };
}

function drink(vampire) {
  if (vampire.thirsty) {
    vampire.ouncesDrank += 10;
    if (vampire.ouncesDrank >= 50) vampire.thirsty = false;
  }

  return vampire;
}

function findBatLovers(vampires) {
  var batLovers = [];

  for (let i = 0; i < vampires.length; i += 1) {
    if (vampires[i].pet === 'bat') batLovers.push(vampires[i].name);
  }

  return batLovers;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) return 'I WANT TO SUCK YOUR BLOOD!';

  return 'No thanks, I am too full.';
}

function inquirePlace(locations, location) {
  for (let i = 0; i < locations.length; i += 1) {
    if (locations[i] === location) {
      return `Yes, I have spent some time in ${location}.`;
    }
  }

  return 'No, I have never been to Idaho.';
}

module.exports = {
  createVampire,
  drink,
  findBatLovers,
  encounterDeliciousVictim,
  inquirePlace,
};
