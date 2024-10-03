import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Message } from "./message/message";
import { markMessageAsRead } from "../../../common/storage";
import { Props } from "./messages.types";

const markAsRead = (id: string) => markMessageAsRead(id);

export const Messages: React.FC<Props> = ({ data, onRefresh }) => {
  return (
    <div className="h-100 d-flex flex-column overflow-hidden">
      <Navbar expand="lg" className="bg-body-tertiary justify-content-between">
        <Container>
          <div data-testid="message-count">{data.length} new messages</div>
          <Button size="sm" variant="outline-primary" onClick={onRefresh}>
            Refresh
          </Button>
        </Container>
      </Navbar>
      <div className="d-flex flex-column gap-1 p-1 overflow-auto" data-testid="messages-container">
        {data.map((m) => (
          <Message key={m.id} data={m} onRead={markAsRead} />
        ))}
      </div>
    </div>
  );
};
