const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id,
        },
      ]);
    default:
      return state;
  }
};
export default messages;
