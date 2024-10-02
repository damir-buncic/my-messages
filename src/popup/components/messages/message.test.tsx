import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Message } from "./message";
import { Message as TMessage } from "../../../common/types";
import { markMessageAsRead } from "../../../common/storage";

describe("Message component", () => {
  it("should render message", () => {
    const data: TMessage = { id: "m1", content: "This is message", priority: "low", read: false, timestamp: "" };
    const markAsRead = vi.fn().mockImplementation(markMessageAsRead);
    render(<Message data={data} onRead={markAsRead} />);
    expect(screen.getByTestId("message-content").innerHTML).toContain(data.content);

    fireEvent.click(screen.getByText(/Mark as read/i));
    expect(markAsRead).toHaveBeenCalledTimes(1);
  });
});
