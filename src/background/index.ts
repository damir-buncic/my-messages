import { getData, setError, setLoading, setMessages } from "../common/storage";
import { fetchMessages } from "./api";

const TIMEOUT = 60 * 1000;

async function getMessages() {
  try {
    const response = await fetchMessages();
    await setMessages(response);
  } catch (e: unknown) {
    await setError((e as { message: string }).message);
  }
}

async function loop(repeat: boolean) {
  setLoading();
  await getMessages();

  if (repeat) {
    setTimeout(() => {
      loop(true);
    }, TIMEOUT);
  }
}

loop(true);

chrome.runtime.onMessage.addListener(function (data) {
  if (data.msg == "reload") {
    loop(false);
  }
});

async function storageOnChanged() {
  const data = await getData();
  if (data.status === "SUCCESS") {
    const count = data.messages.filter((m) => !m.read).length;
    await chrome.action.setBadgeText({ text: count > 0 ? count.toString() : "" });
  } else {
    await chrome.action.setBadgeText({ text: "" });
  }
}

chrome.storage.local.onChanged.addListener(storageOnChanged);
