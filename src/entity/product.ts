export default class Product {
  #id: string;
  #name: string;
  #price: number;

  constructor(id: string, name: string, price: number) {
    this.#id = id;
    this.#name = name;
    this.#price = price;

    this.validate();
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }

  changeName(name: string) {
    this.#name = name;

    this.validate();
  }

  changePrice(price: number) {
    this.#price = price;

    this.validate();
  }

  validate() {
    if (this.#id.length === 0) {
      throw new Error("Id is required");
    }
    if (this.#name.length === 0) {
      throw new Error("Name is required");
    }
    if (this.#price < 0) {
      throw new Error("Price must be greater than 0");
    }

    return true;
  }
}
