function createHobbit(name = 'unknown', age = 0) {
  return {
    name,
    age,
    isAdult: age > 32,
    isOld: age > 100,
    acquaintances: [],
  };
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1;

  if (hobbit.age > 32) hobbit.isAdult = true;
  if (hobbit.age > 100) hobbit.isOld = true;

  return hobbit;
}

function getRing(hobbit) {
  if (hobbit.name === 'Frodo') {
    return 'Here is the ring!';
  }

  return "You can't have it!";
}

function meetPeople(hobbit, people) {
  hobbit.acquaintances = hobbit.acquaintances.concat(people);
  return hobbit;
}

function findFriends(hobbit) {
  var friends = [];

  for (let i = 0; i < hobbit.acquaintances.length; i += 1) {
    if (hobbit.acquaintances[i].relationship === 'friend') {
      friends.push(hobbit.acquaintances[i].name);
    }
  }

  return friends;
}

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople,
  findFriends,
};
