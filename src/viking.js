// Soldier
class Soldier {
  constructor(healthParam, strengthParam) {
    this.health= healthParam;
    this.strength = strengthParam;
  }
  attack = () => {
    return this.strength;
  }
  
  receiveDamage = (strengthParam) =>{
    this.health = this.health - strengthParam;
  }
}


// Viking
class Viking extends Soldier {

  constructor(nameParam, health, strength){
      super(health, strength)
      this.name = nameParam;
      }
      receiveDamage = (strength) => {
        this.health = this.health - strength;
        if (this.health > 0){
          return `${this.name} has received ${strength} points of damage`;
        }else {
          return `${this.name} has died in act of combat`;
        }
        }
        battleCry = () => {
          return "Odin Owns You All!"
        }
}

// Saxon
class Saxon  extends Soldier{
  constructor(salud, fuerza){
    super(salud, fuerza)
  }
  receiveDamage = (strength) => {
    this.health = this.health - strength;
    if (this.health > 0){
      return `A Saxon has received ${strength} points of damage`;
    }else {
      return `A Saxon has died in combat`;
    }
    }
}

// War
class War extends Saxon{
/*  constructor(){
    
  }

addViking =() =>{

}
addSaxon()
vikingAttack()
saxonAttack()
showStatus()*/
}

//let vikiArr = new War.vikingArmy [];
//let saxoArr = new War.saxonArmy [];

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
