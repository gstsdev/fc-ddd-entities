export default class OrderItem {
  #id: string;
  #productId: string;
  #name: string;
  #price: number;
  #quantity: number;

  constructor(
    id: string,
    name: string,
    price: number,
    productId: string,
    quantity: number
  ) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#productId = productId;
    this.#quantity = quantity;

    this.validate();
  }

  get price() {
    return this.#price;
  }

  get quantity() {
    return this.#quantity;
  }

  orderItemTotal() {
    return this.price * this.#quantity;
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

    if (this.#productId.length === 0) {
      throw new Error("ProductId is required");
    }

    if (this.#quantity <= 0) {
      throw new Error("Quantity must be greater than 0");
    }
  }
}
