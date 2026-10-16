import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Home } from "../../src/components/home";
import { describe, expect, it } from "vitest";

describe("Home page", () => {
  it("value is change when click the button", async () => {
    const user = userEvent.setup();

    render(<Home />);

    const input = screen.getByPlaceholderText("example 10, 20, 30");

    await user.type(input, "10 , 20 , 30");

    const button = screen.getByRole("button", { name: "average" });

    await user.click(button);

    expect(screen.getByText("this Average: 20")).toBeInTheDocument();
  });

  it("message error appear when throw error", async () => {
    const user = userEvent.setup();

    render(<Home />);

    const input = screen.getByPlaceholderText("example 10, 20, 30");

    await user.type(input, "232 , sd, 23");

    const button = screen.getByRole("button", { name: "average" });

    await user.click(button);

    expect(screen.getByText("Not implemented this value")).toBeInTheDocument();
  });
});
