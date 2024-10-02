import { afterEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./app";

const useData = vi.hoisted(() => vi.fn());
vi.mock("../hooks/useData", () => ({
  useData,
}));

describe("App component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render loading state", () => {
    useData.mockReturnValue({
      status: "LOADING",
    });

    const wrapper = render(<App />);
    expect(wrapper.container.innerHTML).toContain("Loading...");
  });

  it("should render error state", () => {
    useData.mockReturnValue({
      status: "ERROR",
      message: "Some error",
    });

    const wrapper = render(<App />);
    expect(wrapper.container.innerHTML).toContain("Some error");
  });

  it("should render empty state", () => {
    useData.mockReturnValue({
      status: "SUCCESS",
      messages: [],
    });

    const wrapper = render(<App />);
    expect(wrapper.container.innerHTML).toContain("Hooray!");
  });
});
