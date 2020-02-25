import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import { withRouter } from "react-router-dom";
import Header from '../Components/Header';
import moment from 'moment';
import { Container } from './styles';

export default class Room extends Component {
  state = {
    messages: [],
    messageInput: ""
  }

  constructor(){
    super()
    this.socket = socketIOClient('https://focalchatsocket.herokuapp.com/');
    this.mesRef = React.createRef();
  }

  handleFormSubmit(e) {
    e.preventDefault()
    console.log(this.props.match.params.name, this.state.messageInput)
    this.socket.emit('send-chat-message', this.props.location.state.roomId, this.state.messageInput)
    this.setState({
      messages: this.state.messages.concat([
        {
          name: 'Você',
          message: this.state.messageInput,
          time: moment().format('HH:mm'),
        },
      ]),
    });
    this.setState( {messageInput: ""} )
  }

  scrollToBottom = () => {
		this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
	};
  
  componentWillMount() {
    if (this.props.location.state === undefined) {
      this.props.history.push('/');
      return;
    }
    this.socket.emit('room-created', this.props.location.state.roomId)
    this.socket.emit('new-user', this.props.location.state.roomId, this.props.location.state.userName)
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }
  
  componentDidMount(){
    this.scrollToBottom()
    this.socket.on('chat-message', data => {
      this.setState({
        messages: this.state.messages.concat([
          {
            name: data.name,
            message: data.message,
            time: moment().format('HH:mm'),
          },
        ]),
      });
    });

    this.socket.on('user-connected', name => {
      this.setState({
        messages: this.state.messages.concat({
          name: name,
          time: moment().format('HH:mm'),
          message: 'Entrou na sala',
        }),
      });
    });

    this.socket.on('user-disconnected', name => {
      this.setState({
        messages: this.state.messages.concat({
          name: name,
          time: moment().format('HH:mm'),
          message: 'Saiu da sala',
        }),
      });
    });
  }

  render() {
    return (
      <>
      <Header exitButton={true} />
      <Container>
      <form onSubmit={(e)=> this.handleFormSubmit(e)} id="chat">
      <h1>Bem vindo a sala {this.props.match.params.name}</h1>
        <div className="messages" ref={this.mesRef}>
          {this.state.messages.map((message, index)=> (
            <li style={ message.name === 'Você' ? {textAlign: 'right'} : null} key={index}>{`${message.name}: ${message.message}`}
            <p>{message.time}</p></li>
          ))}
        </div>
        <input type="text" className="message" 
        placeholder="Digite sua mensagem"
        onChange={(e)=> this.setState({messageInput: e.target.value})}
        value={this.state.messageInput}/>
        <button type="submit">Enviar</button>
      </form>
      </Container>
      </>
    );
  }
}
