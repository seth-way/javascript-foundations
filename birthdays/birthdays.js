function createBirthday(name, month, day) {
  return {
    name,
    month,
    day,
  };
}

function celebrateBirthday(birthday) {
  return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

function countBirthdays(birthdays, month) {
  var count = 0;

  for (let i = 0; i < birthdays.length; i += 1) {
    if (birthdays[i].month === month) count += 1;
  }

  return count;
}

module.exports = {
  createBirthday,
  celebrateBirthday,
  countBirthdays,
};
