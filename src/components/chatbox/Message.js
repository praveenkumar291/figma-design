import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, author }) => (
  <p
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: "15px",
    }}
  >
    <i>{author}</i>
    <span
      style={{
        background: "#b3b3b3",
        // background: `#${((Math.random() * 0xffffff) << 0).toString(16)}`, toget random color
        padding: "8px",
        borderRadius: "50px",
        borderTopLeftRadius: "0px",
        borderBottomLeftRadius: "0px",
        maxWidth: "406px",
        fontFamily: "Proxima Nova",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        marginLeft: "2px",
        color: "#000000",
        opacity: "0.8",
      }}
    >
      {message}
    </span>
  </p>
);
Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Message;
