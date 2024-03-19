import OrderItem from "./order_item";

describe("Order item unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new OrderItem("", "Item", 100, "p1", 1);
    }).toThrow("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new OrderItem("i1", "", 100, "p1", 1);
    }).toThrow("Name is required");
  });

  it("should throw error when productId is empty", () => {
    expect(() => {
      new OrderItem("i1", "Item 1", 100, "", 1);
    }).toThrow("ProductId is required");
  });

  it("should throw error when price is less than 0", () => {
    expect(() => {
      new OrderItem("i1", "Item 1", -1, "p1", 1);
    }).toThrow("Price must be greater than 0");
  });

  it("should throw error when quantity is less or equal to 0", () => {
    expect(() => {
      new OrderItem("i1", "Item 1", 100, "p1", 0);
    }).toThrow("Quantity must be greater than 0");
  });
});
