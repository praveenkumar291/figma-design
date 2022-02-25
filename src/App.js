import React, { useState } from "react";
import Home from "./pages/Home";
import { connect } from "react-redux";
import { windowStage } from "./redux/actions";

import { Window } from "@progress/kendo-react-dialogs";

const App = ({ windowState, windowStage }) => {
  const handleStageChange = (e) => {
    windowStage(e.state);
  };
  return (
    <Window
      title={"Status"}
      stage={windowState}
      onStageChange={handleStageChange}
    >
      <Home />
    </Window>
  );
};

export default connect((state) => ({ windowState: state.navbar.windowState }), {
  windowStage,
})(App);
