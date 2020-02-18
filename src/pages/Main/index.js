import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../Components/Header';
import RoomCard from '../Components/RoomCard';

import { Container } from './styles';

const Main = () => {
  const [userName, setUserName] = useState()
  const history = useHistory();
  
  return (
    <>
    <Header/>
    <Container>
    <div className="container">
      <RoomCard />
      {/* <ul>
        <li onClick={e => handleClick(e)} >
          Política
        </li>
        <li onClick={e => handleClick(e)}>
          BBB
        </li>
      </ul>
      <input type="text" onChange={e => setUserName(e.target.value)}/> */}
    </div>
    </Container>
    </>
  )
};

export default Main;
