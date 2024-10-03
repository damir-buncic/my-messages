import { Button } from "react-bootstrap";
import { clearReadMessages } from "../../../common/storage";

export const NoData = () => {
  return (
    <div className="h-100 d-flex flex-column justify-content-center align-items-center gap-2">
      <div>Hooray!!</div>
      <div>You are up to date!</div>
      <Button onClick={clearReadMessages}>Reset</Button>
    </div>
  );
};
