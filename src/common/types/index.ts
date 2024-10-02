export type Message = {
  id: string;
  content: string;
  priority: "high" | "normal" | "low";
  timestamp: string;
  read: boolean;
};

export type Data = { status: "SUCCESS"; messages: Message[] } | { status: "ERROR"; message: string } | { status: "LOADING" };