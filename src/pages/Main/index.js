import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import RoomCard from "../Components/RoomCard";
import Api from "../../Services/api";
import ReactLoading from "react-loading";

import { Container } from "./styles";

const Main = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await Api.get("room");
      setRooms(result.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {loading ? (
          <ReactLoading type={"bars"} color={"black"} />
        ) : (
          <div className="container">
            <RoomCard Rooms={rooms} />
          </div>
        )}
      </Container>
    </>
  );
};

export default Main;
