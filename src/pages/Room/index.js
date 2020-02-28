import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Header from "../Components/Header";
import moment from "moment";
import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default class Room extends Component {
  state = {
    messages: [],
    messageInput: ""
  };

  constructor() {
    super();
    this.socket = socketIOClient("https://focalchatsocket.herokuapp.com/");
    this.mesRef = React.createRef();
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.messageInput === "") return;
    this.socket.emit(
      "send-chat-message",
      this.props.location.state.roomId,
      this.state.messageInput
    );
    this.setState({
      messages: this.state.messages.concat([
        {
          local: true,
          name: "Você",
          message: this.state.messageInput,
          time: moment().format("HH:mm")
        }
      ])
    });
    this.setState({ messageInput: "" });
  }

  scrollToBottom = () => {
    this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
  };

  componentWillUnmount() {
    this.socket.disconnect();
  }

  componentWillMount() {
    // Prevent users without name
    if (this.props.location.state === undefined) {
      this.props.history.push("/");
      return;
    }
    this.socket.emit("room-created", this.props.location.state.roomId);
    this.socket.emit(
      "new-user",
      this.props.location.state.roomId,
      this.props.location.state.userName
    );
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    this.scrollToBottom();
    this.socket.on("chat-message", data => {
      this.setState({
        messages: this.state.messages.concat([
          {
            local: false,
            name: data.name,
            message: data.message,
            time: moment().format("HH:mm")
          }
        ])
      });
    });

    this.socket.on("user-connected", name => {
      this.setState({
        messages: this.state.messages.concat({
          local: false,
          name: name,
          time: moment().format("HH:mm"),
          message: "Entrou na sala"
        })
      });
    });

    this.socket.on("user-disconnected", name => {
      this.setState({
        messages: this.state.messages.concat({
          local: false,
          name: name,
          time: moment().format("HH:mm"),
          message: "Saiu da sala"
        })
      });
    });
  }

  render() {
    return (
      <>
        <Header exitButton={true} />
        <Container>
          <form onSubmit={e => this.handleFormSubmit(e)} id="chat">
            <h1>Bem vindo a sala {this.props.match.params.name}</h1>
            <div className="messages" ref={this.mesRef}>
              {this.state.messages.map((message, index) => (
                <li
                  style={message.local ? { textAlign: "right" } : null}
                  key={index}
                >
                  {" "}
                  <div
                    className="message-container"
                    style={
                      message.local
                        ? { backgroundColor: "#ededed" }
                        : { backgroundColor: "#dcf8c6" }
                    }
                  >
                    <span>{message.name}</span>
                    {`: ${message.message}`}
                    <p>{message.time}</p>
                  </div>
                </li>
              ))}
            </div>
            <div className="send-section">
              <input
                type="text"
                className="message"
                placeholder="Digite sua mensagem"
                onChange={e => this.setState({ messageInput: e.target.value })}
                value={this.state.messageInput}
              />
              <div className="btn" onClick={e => this.handleFormSubmit(e)}>
                <FontAwesomeIcon icon={faPaperPlane} size="2x" />
              </div>
            </div>
          </form>
        </Container>
      </>
    );
  }
}
