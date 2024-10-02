import React from "react";
import { Message as TMessage } from "../../../common/types";
import { Button, Container, Navbar } from "react-bootstrap";
import { Message } from "./message";
import { markMessageAsRead } from "../../../common/storage";

type Props = {
  data: TMessage[];
  onRefresh: () => void;
};

const markAsRead = (id: string) => markMessageAsRead(id);

export const Messages: React.FC<Props> = ({ data, onRefresh }) => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
        <Container>
          <div data-testid="message-count">{data.length} new messages</div>
          <Button onClick={onRefresh}>Refresh</Button>
        </Container>
      </Navbar>
      <div className="d-flex flex-column gap-1 p-1" data-testid="messages-container">
        {data.map((m) => (
          <Message key={m.id} data={m} onRead={markAsRead} />
        ))}
      </div>
    </div>
  );
};
