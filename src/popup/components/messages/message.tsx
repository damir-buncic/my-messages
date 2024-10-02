import React from "react";
import { Message as TMessage } from "../../../common/types";
import { Badge, Button, Card, CardBody, CardHeader, CardText } from "react-bootstrap";

type Props = {
  data: TMessage;
  onRead: (id: string) => void;
};

export const Message: React.FC<Props> = ({ data, onRead }) => {
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <Badge bg="secondary">{data.priority}</Badge>
        <Button size="sm" onClick={() => onRead(data.id)}>
          Mark as read
        </Button>
      </CardHeader>
      <CardBody>
        <CardText data-testid="message-content">{data.content}</CardText>
      </CardBody>
    </Card>
  );
};
