import "../../src/language/";

import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Language } from "../../src/components/Language";

describe("Language component", () => {
  beforeEach(() => {
    render(<Language />);
  });

  it("render en by default", () => {
    const name = screen.getByText("My name is bob");
    expect(name).toBeInTheDocument();
  });

  it("render th when click the buttom", async () => {
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: "TH" });

    await user.click(button);

    expect(screen.getByText("สวัสดีทุกคน")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
  });
});
