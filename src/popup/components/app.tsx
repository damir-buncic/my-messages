import { Status } from "../../common/types";
import { useData } from "../hooks/useData";
import { Error } from "./error/error";
import { Loader } from "./loader/loader";
import { Messages } from "./messages/messages";
import { NoData } from "./no-data/no-data";

const refresh = () => chrome.runtime.sendMessage({ msg: "reload" });

function App() {
  const data = useData();

  if (data.status === Status.ERROR) {
    return <Error error={data.message} onRefresh={refresh} />;
  }

  if (data.status === Status.LOADING) {
    return <Loader />;
  }

  const unreadMessages = data.messages.filter((m) => !m.read);

  if (unreadMessages.length == 0) {
    return <NoData />;
  }

  return <Messages data={unreadMessages} onRefresh={refresh} />;
}

export default App;
