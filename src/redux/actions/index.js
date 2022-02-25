import { ADD_MESSAGE, MINI_MIZE, MAX_MIZE, WINDOW_STAGE } from "../ActionTypes";

let nextMessageId = 0;

export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author,
});

export const miniMize = () => ({
  type: MINI_MIZE,
  payload: "MINIMIZE",
});

export const maxMize = () => ({
  type: MAX_MIZE,
  payload: "MAXIMIZE",
});

export const windowStage = (data) => ({
  type: WINDOW_STAGE,
  payload: data,
});
