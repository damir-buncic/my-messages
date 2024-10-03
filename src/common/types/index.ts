export enum Priority {
  high = "high",
  normal = "normal",
  low = "low",
}

export enum Status {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

export type Message = {
  id: string;
  content: string;
  priority: Priority;
  timestamp: string;
  read: boolean;
};

export type Data =
  | { status: Status.SUCCESS; messages: Message[] }
  | { status: Status.ERROR; message: string }
  | { status: Status.LOADING };
