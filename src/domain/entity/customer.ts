import Address from "./address";

export default class Customer {
  #id: string;
  #name: string;
  #address!: Address;
  #active: boolean = false;
  #rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this.#id = id;
    this.#name = name;

    this.validate();
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get address() {
    return this.#address;
  }

  get rewardPoints() {
    return this.#rewardPoints;
  }

  validate() {
    if (this.#id.length === 0) {
      throw new Error("Id is required");
    }

    if (this.#name.length === 0) {
      throw new Error("Name is required");
    }
  }

  changeName(name: string) {
    this.#name = name;
    this.validate();
  }

  changeAddress(address: Address) {
    this.#address = address;
  }

  isActive() {
    return this.#active;
  }

  activate() {
    if (this.#address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }

    this.#active = true;
  }

  deactivate() {
    this.#active = false;
  }

  addRewardPoints(points: number) {
    this.#rewardPoints += points;
  }

  set address(address: Address) {
    this.#address = address;
  }
}
