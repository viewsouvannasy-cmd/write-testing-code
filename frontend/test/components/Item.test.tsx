import { render, screen } from "@testing-library/react";
import { Item } from "../../src/components/Item";
import { describe, expect, it, beforeEach } from "vitest";

describe("Item Components", () => {
  const product = {
    name: "Wireless Earbuds Pro",
    price: "79.99",
    rating: "4.5",
  };

  beforeEach(() => {
    render(<Item item={product} />);
  });

  it("It display product name", () => {
    expect(screen.getByText("Wireless Earbuds Pro")).toBeInTheDocument();
  });

  it("It display product price", () => {
    expect(screen.getByText("Price: 79.99$")).toBeInTheDocument();
  });

  it("It display product rating", () => {
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });
});
