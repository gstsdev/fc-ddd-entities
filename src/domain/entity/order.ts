import OrderItem from "./order_item";

export default class Order {
  #id: string;
  #customerId: string;
  #items: OrderItem[];
  #total: number;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this.#id = id;
    this.#customerId = customerId;
    this.#items = items;
    this.#total = this.total();

    this.validate();
  }

  get id() {
    return this.#id;
  }

  get customerId() {
    return this.#customerId;
  }

  get items() {
    return this.#items;
  }

  validate() {
    if (this.#id.length === 0) {
      throw new Error("Id is required");
    }
    if (this.#customerId.length === 0) {
      throw new Error("CustomerId is required");
    }
    if (this.#items.length === 0) {
      throw new Error("Items are required");
    }

    if (this.#items.some((item) => item.quantity <= 0)) {
      throw new Error("Quantity must be greater than 0");
    }

    return true;
  }

  total() {
    return this.#items.reduce(
      (total, item) => total + item.orderItemTotal(),
      0
    );
  }
}
