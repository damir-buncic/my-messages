import { Message } from "../../../../common/types";

export type Props = {
  data: Message;
  onRead: (id: string) => void;
};
