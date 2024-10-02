import { Data, Message } from "../types";

export async function setMessages(messages: Message[]) {
  const readMessagesIds = convertReadMessageIdsToObj(await getReadMessageIds());
  messages = messages.map((m) => (readMessagesIds[m.id] ? { ...m, read: true } : m));
  await chrome.storage.local.set({ data: { status: "SUCCESS", messages } });
}

export async function setError(message: string) {
  await chrome.storage.local.set({ data: { status: "ERROR", message } });
}

export async function setLoading() {
  await chrome.storage.local.set({ data: { status: "LOADING" } });
}

export async function clearReadMessages() {
  await chrome.storage.local.remove("read_messages");
  let messages = await getMessages();
  messages = messages.map((m) => ({ ...m, read: false }));
  await setMessages(messages);
}

export async function markMessageAsRead(id: string) {
  const readMessagesIds: string[] = await getReadMessageIds();
  if (!readMessagesIds.includes(id)) {
    readMessagesIds.push(id);
    await setReadMessageIds(readMessagesIds);
    let messages = await getMessages();
    messages = messages.map((m) => (m.id == id ? { ...m, read: true } : m));
    await setMessages(messages);
  }
}

export async function getData(): Promise<Data> {
  const data = (await chrome.storage.local.get(["data"])).data || { status: "LOADING" };
  return data;
}

/* HELPER FUNCTIONS */

function convertReadMessageIdsToObj(ids: string[]) {
  const readMessagesObj: Record<string, boolean> = {};
  ids.forEach((id: string) => {
    readMessagesObj[id] = true;
  });
  return readMessagesObj;
}

async function getMessages(): Promise<Message[]> {
  const data = (await chrome.storage.local.get(["data"])).data;
  if (!data || data.status !== "SUCCESS") {
    return [];
  }
  return data.messages;
}

async function getReadMessageIds(): Promise<string[]> {
  const readMessages = (await chrome.storage.local.get(["read_messages"])).read_messages || [];
  return readMessages;
}

async function setReadMessageIds(ids: string[]) {
  await chrome.storage.local.set({ read_messages: ids });
}
