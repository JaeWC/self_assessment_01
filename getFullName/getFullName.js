function getFullName(obj) {
  var nameObj = obj.name;

  if (nameObj.middle === undefined) {
    return nameObj.first + ' ' + nameObj.last;
  }
  return nameObj.first + ' ' + nameObj.middle + ' ' + nameObj.last;
}

var person = {
  name : {
    first : "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age : 26
};
getFullName(person); //"Alyssa P. Hacker"

var personB = {
  name: {
    first: "Ben",
    last: "Bitdiddle"
  },
  age: 34
};
getFullName(personB); //"Ben Bitdiddle"