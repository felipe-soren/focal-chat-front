import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

const RoomCard = ({ Rooms }) => {
  console.log(Rooms);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const history = useHistory();

  function goToRoom(e) {
    history.push({
      pathname: `/room/${roomName}`,
      state: { userName: userName, roomId: roomId }
    });
  }

  function handleCardClick(room, roomId) {
    setShowModal(true);
    setRoomName(room);
    setRoomId(roomId);
  }

  return (
    <Container>
      {showModal ? (
        <div className="modal-bg">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Entrar no Chat</h1>
              <button className="close" onClick={() => setShowModal(false)}>
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <form onSubmit={e => goToRoom(e)}>
              <h3>Digite seu nome para entrar no chat</h3>
              <input type="text" onChange={e => setUserName(e.target.value)} />
            </form>
            <div className="modal-footer">
              <button className="btn" onClick={() => goToRoom()}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
              <div class="grid-container">
      {Rooms.map(room => (
          <div
            className="room-card"
            key={room.id}
            id={room.id}
            onClick={e => handleCardClick(room.name, room.id)}>
            <div
              className="header"
              style={{ backgroundImage: `url('${room.imageUrl}')` }}>
              <div className="opacity">
                <p>Entrar</p>
              </div>
            </div>
            <div className="content">
              <p className="title">{room.name}</p>
              <p className="decription">{room.description}</p>
            </div>
          </div>
      ))}
      </div>
    </Container>
  );
};

export default RoomCard;
