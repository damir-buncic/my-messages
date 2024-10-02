import { Message } from "../common/types";

const TIMEOUT = 1000;

const DATA = [
  {
    id: "msg1",
    content: "#1 Team meeting at 3 PM today 🙂",
    priority: "high",
    timestamp: "2024-09-30T15:00:00Z",
    read: false,
  },
  {
    id: "msg2",
    content: "#2 Team meeting at 3 PM today 🙂",
    priority: "normal",
    timestamp: "2024-09-30T15:00:00Z",
    read: false,
  },
  {
    id: "msg3",
    content: "#3 Team meeting at 3 PM today 🙂",
    priority: "low",
    timestamp: "2024-09-30T15:00:00Z",
    read: false,
  },
] as Message[];

export function fetchMessages(): Promise<Message[]> {
  const random = Math.random();
  if (random <= 0.3) {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(reject(new Error("Ups! Something went wrong")));
      }, TIMEOUT);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(DATA);
    }, TIMEOUT);
  });
}
