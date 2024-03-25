export default class Address {
  #street: string = "";
  #number: number = 0;
  #zip: string = "";
  #city: string = "";

  constructor(street: string, number: number, zip: string, city: string) {
    this.#street = street;
    this.#number = number;
    this.#zip = zip;
    this.#city = city;
  }

  get street() {
    return this.#street;
  }
  get number() {
    return this.#number;
  }
  get zip() {
    return this.#zip;
  }
  get city() {
    return this.#city;
  }

  validate() {
    if (this.#street.length === 0) {
      throw new Error("Street is required");
    }
    if (this.#number === 0) {
      throw new Error("Number is required");
    }
    if (this.#zip.length === 0) {
      throw new Error("Zip is required");
    }
    if (this.#city.length === 0) {
      throw new Error("City is required");
    }
  }

  toString() {
    return `${this.#street}, ${this.#number}, ${this.#zip} ${this.#city}`;
  }
}
