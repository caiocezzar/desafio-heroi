
class hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

   attack() {
    if (this.type === "Mago") {
      console.log(`O ${this.type} atacou usando Magia`);
    } else if (this.type === "Guerreiro") {
      console.log(`O ${this.type} atacou usando Espada`);
    } else if (this.type === 'Monge') {
      console.log(`O ${this.type} atacou usando Artes Marciais`);
    } else if (this.type === 'Ninja') {
      console.log(`O ${this.type} atacou usando Shuriken`);
    } 
  }
  
}

let typeHero = new hero("Angus", 50, "Ninja");
console.log(typeHero)
typeHero.attack()

