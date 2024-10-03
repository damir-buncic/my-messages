import { afterEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./app";
import { Status } from "../../common/types";

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
      status: Status.LOADING,
    });

    const wrapper = render(<App />);
    expect(wrapper.container.innerHTML).toContain("Loading...");
  });

  it("should render error state", () => {
    useData.mockReturnValue({
      status: Status.ERROR,
      message: "Some error",
    });

    const wrapper = render(<App />);
    expect(wrapper.container.innerHTML).toContain("Some error");
  });

  it("should render empty state", () => {
    useData.mockReturnValue({
      status: Status.SUCCESS,
      messages: [],
    });

    const wrapper = render(<App />);
    expect(wrapper.container.innerHTML).toContain("Hooray!");
  });
});
