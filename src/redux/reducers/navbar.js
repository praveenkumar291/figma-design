const navbar = (state = { windowState: "FULLSCREEN" }, action) => {
  switch (action.type) {
    case "MINI_MIZE":
      return { ...state, windowState: "DEFAULT" };
    case "MAX_MIZE":
      return { ...state, windowState: "FULLSCREEN" };
    case "WINDOW_STAGE":
      return { ...state, windowState: action.payload };

    default:
      return state;
  }
};

export default navbar;
