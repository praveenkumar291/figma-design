import { ADD_MESSAGE } from "../ActionTypes";

let nextMessageId = 0;

export const addMessage = (message, author, color) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});
