import { Data, Message, Status } from "../types";

export async function setMessages(messages: Message[]) {
  const readMessagesIds = await getReadMessageIds();

  const newReadMessagesIds: Record<string, boolean> = {};
  messages.forEach((m) => {
    if (readMessagesIds[m.id]) {
      m.read = true;
      newReadMessagesIds[m.id] = true;
    }
  });
  await setReadMessageIds(newReadMessagesIds);

  await chrome.storage.local.set({ data: { status: Status.SUCCESS, messages } });
}

export async function setError(message: string) {
  await chrome.storage.local.set({ data: { status: Status.ERROR, message } });
}

export async function setLoading() {
  await chrome.storage.local.set({ data: { status: Status.LOADING } });
}

export async function clearReadMessages() {
  await chrome.storage.local.remove("read_messages");
  let messages = await getMessages();
  messages = messages.map((m) => ({ ...m, read: false }));
  await setMessages(messages);
}

export async function markMessageAsRead(id: string) {
  const readMessagesIds = await getReadMessageIds();
  if (!readMessagesIds[id]) {
    readMessagesIds[id] = true;
    await setReadMessageIds(readMessagesIds);
    let messages = await getMessages();
    messages = messages.map((m) => (m.id == id ? { ...m, read: true } : m));
    await setMessages(messages);
  }
}

export async function getData(): Promise<Data> {
  const data = (await chrome.storage.local.get(["data"])).data || { status: Status.LOADING };
  return data;
}

/* HELPER FUNCTIONS */

async function getMessages(): Promise<Message[]> {
  const data = (await chrome.storage.local.get(["data"])).data;
  if (!data || data.status !== Status.SUCCESS) {
    return [];
  }
  return data.messages;
}

async function getReadMessageIds(): Promise<Record<string, boolean>> {
  const readMessages = (await chrome.storage.local.get(["read_messages"])).read_messages || {};
  return readMessages;
}

async function setReadMessageIds(ids: Record<string, boolean>) {
  await chrome.storage.local.set({ read_messages: ids });
}
