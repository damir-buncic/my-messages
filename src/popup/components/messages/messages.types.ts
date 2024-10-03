import { Message } from "../../../common/types";

export type Props = {
  data: Message[];
  onRefresh: () => void;
};
