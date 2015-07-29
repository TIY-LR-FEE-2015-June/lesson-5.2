function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

var homer = new Person('Homer', 'Simpson', 38);

var family = [
  homer,
  new Person('Maggie', 'Simpson', 1),
  new Person('Marge', 'Simpson', 34),
  new Person('Bart', 'Simpson', 10),
  new Person('Lisa', 'Simpson', 8)
];

family.forEach(function(familyMember) {
  console.log(familyMember.lastname);
});

var withIInName = family.filter(function(p) {
  return p.firstname.indexOf('i') > -1;
});

// Should give only Maggie and Lisa
console.log(withIInName);

var firstNamesOnly = family.map(function(simpson) {
  return simpson.firstname;
});

// Should give us ['Homer', 'Maggie', 'Marge', 'Bart', 'Lisa']
console.log(firstNamesOnly);

var alphaOrder = family.sort(function(a, b) {
  return a.firstname > b.firstname;
});

console.log(alphaOrder); // [Bart, Homer, Lisa, Maggie, Marge]

var totalAge = family.reduce(function(prevTotal, current) {
  return prevTotal + current.age;
}, 0);

console.log(totalAge); // Should return 91

var average = totalAge / family.length;

console.log(average); // Should return 18.2

var oldestPerson = family.reduce(function(currentOldest, current) {
  if (current.age > currentOldest.age) {
    return current;
  }

  return currentOldest;
});

console.log(oldestPerson); // Should return the Homer Person object
