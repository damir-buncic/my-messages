import { useData } from "../hooks/useData";
import { Error } from "./error";
import { Loader } from "./loader";
import { Messages } from "./messages/messages";
import { NoData } from "./no-data";

const refresh = () => chrome.runtime.sendMessage({ msg: "reload" });

function App() {
  const data = useData();

  if (data.status === "ERROR") {
    return <Error error={data.message} onRefresh={refresh} />;
  }

  if (data.status === "LOADING") {
    return <Loader />;
  }

  const unreadMessages = data.messages.filter((m) => !m.read);

  if (unreadMessages.length == 0) {
    return <NoData />;
  }

  return <Messages data={unreadMessages} onRefresh={refresh} />;
}

export default App;
