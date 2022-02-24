import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import { addMessage } from "../redux/actions";

// Icons
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const AddMessage = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.message.value);
    addMessage(
      input.value,
      <Avatar
        sx={{ width: 24, height: 24 }}
        alt="Remy Sharp"
        variant="square"
        src="images/unsplash_cTqxDBsEv3g.png"
      />
    );
    setMessage("");
  };

  let input;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section id="new-message" style={{ display: "flex" }}>
          <AttachFileIcon style={{ padding: "7px" }} />
          <input
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              height: "30px",
              paddingLeft: "10px",
              border: "0.25px solid rgba(0, 0, 0, 0.22)",
              borderRadius: "20px",
            }}
            type="text"
            ref={(node) => {
              input = node;
            }}
          />
          <button
            style={{ padding: "0", border: "none", background: "none" }}
            type="submit"
          >
            <SendIcon />{" "}
          </button>
        </section>
      </form>
    </>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, { addMessage })(AddMessage);



