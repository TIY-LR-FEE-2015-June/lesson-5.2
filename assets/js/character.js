function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

var h = new Person('Homer', 'Simpson');

var withNewName = function(person) {
  var cp = new Person(person.firstName, person.lastName);

  cp.firstName = 'y';
  return cp;
};

h = withNewName(h);

// Do some code here...

h.firstName = 'something else';

h = withNewName(h);

function Character(options) {
  options = options || {};
  var hitPoints = options.hitPoints || 100;
  this.weapons = options.weapons || {};

  this.takeDamage = function(damage) { hitPoints -=  damage; };

  this.getAttackStrength = function(weaponName) {
    if (this.weapons[weaponName]) {
      return this.weapons[weaponName];
    }

    return 5;
  };

  this.getHealth = function() {return hitPoints;};
}

Character.prototype.attackedByWithWeapon = function(hostile, weapon) {
  this.takeDamage(hostile.getAttackStrength(weapon));
};

char = new Character({hitPoints: 200, weapons: {hammer: 20, sword: 15}});
enemy = new Character();

char.attackedByWithWeapon(enemy, 'hammer');

console.log('character: ', char.getHealth());
console.log('enemy: ', enemy.getHealth());
