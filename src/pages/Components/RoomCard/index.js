import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { Container } from './styles';

const RoomCard = () => {
  const [showModal, setShowModal] = useState(false)
  const [userName, setUserName] = useState("")
  const [roomName, setRoomName] = useState("")
  const history = useHistory();

  function goToRoom(e) {
    history.push({
      pathname: `/room/${roomName}`,
      state: { userName: userName }
    });
  }

  function handleCardClick(room) {
    setShowModal(true)
    setRoomName(room)
  }
  
  return(
    <Container>
          {showModal ? (
          <div className="modal-bg">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Entrar no Chat</h1>
              <button className="close" onClick={()=> setShowModal(false)}>
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <form onSubmit={(e) => goToRoom(e)}>
              <h3>Digite seu nome para entrar no chat</h3>
              <input type="text" onChange={(e) => setUserName(e.target.value)}/>
            </form>
          <div className="modal-footer">
            <button className="btn" onClick={() => goToRoom()}>Entrar</button>
          </div>
        </div>
        </div>
    ) : ("")}
      <div className="room-card" id="Política"
      onClick={(e) => handleCardClick("Política")}>
        <div className="header" >
          <div className="opacity">
            <p>Entrar</p>
          </div>
        </div>
        <div className="content">
          <p className="title">Política</p>
          <p className="decription">Descubra o que todos estão falando sobre Política</p>
        </div>
      </div>
    </Container>
  )
};

export default RoomCard;
