import React from "react";
import { Button } from "react-bootstrap";
import { Props } from "./error.types";

export const Error: React.FC<Props> = ({ error, onRefresh }) => {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center gap-5">
      {error} <Button onClick={onRefresh}>Try Again</Button>
    </div>
  );
};
