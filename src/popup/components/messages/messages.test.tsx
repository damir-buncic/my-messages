import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Message as TMessage } from "../../../common/types";
import { Messages } from "./messages";

describe("Messages component", () => {
  it("should render messages", () => {
    const data: TMessage[] = [
      { id: "m1", content: "This is message", priority: "low", read: false, timestamp: "" },
      { id: "m2", content: "This is message2", priority: "low", read: false, timestamp: "" },
    ];
    const refresh = vi.fn().mockImplementation(() => undefined);

    render(<Messages data={data} onRefresh={refresh} />);
    expect(screen.getByTestId("messages-container").children.length).toBe(2);
    expect(screen.getByTestId("message-count").innerHTML).toBe("2 new messages");

    fireEvent.click(screen.getByText(/Refresh/i));
    expect(refresh).toHaveBeenCalledTimes(1);
  });
});
