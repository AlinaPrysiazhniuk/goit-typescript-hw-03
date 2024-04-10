class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false; //true
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  public comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log(
        `Person with key  ${person.getKey().getSignature()} came in.`
      );
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
