import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import { connect } from "react-redux";

const MessageList = ({ messages }) => (
  <>
    <ul>
      {messages.map((message) => (
        <Message Key={message.id} {...message} />
      ))}
    </ul>
  </>
);

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = ({ messages }) => ({ messages });

export default connect(mapStateToProps, null)(MessageList);
