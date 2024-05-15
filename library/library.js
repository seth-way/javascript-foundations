function issueCard(name, age) {
  var isChild = age < 12;
  return { name, age, numBooksCheckedOut: 0, isChild };
}

function searchByAuthor(collection, author) {
  var worksByAuthor = [];

  for (let i = 0; i < collection.length; i += 1) {
    if (collection[i].author === author) worksByAuthor.push(collection[i]);
  }

  if (worksByAuthor.length) return worksByAuthor;
  return 'No book found for search criteria'
}

module.exports = { issueCard, searchByAuthor };
