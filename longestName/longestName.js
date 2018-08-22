var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function getFullName(obj) {
  var nameObj = obj.name;

  if (nameObj.middle === undefined) {
    return nameObj.first + ' ' + nameObj.last;
  }
  return nameObj.first + ' ' + nameObj.middle + ' ' + nameObj.last;
}

function longestName(people) {
  var fullNameLength = [];
  for (var i = 0; i < people.length; i++) {
    fullNameLength.push(getFullName(people[i]).length);
  }

  var longestLength = Math.max.apply(null, fullNameLength);
  var nameIndex = fullNameLength.indexOf(longestLength)

  return getFullName(people[nameIndex]);
}

longestName(people); //"Alyssa P. Hacker"