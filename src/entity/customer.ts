import Address from "./address";

export default class Customer {
  #id: string;
  #name: string;
  #address!: Address;
  #active: boolean = false;

  constructor(id: string, name: string) {
    this.#id = id;
    this.#name = name;

    this.validate();
  }

  get name() {
    return this.#name;
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

  set address(address: Address) {
    this.#address = address;
  }
}