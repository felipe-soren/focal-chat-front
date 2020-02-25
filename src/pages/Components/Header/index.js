import React from "react";

import { Container } from "./styles";

const Header = props => {
  return (
    <Container>
      <a href="/">Focal Chat</a>
      {props.exitButton && <a href="/">Sair</a>}
    </Container>
  );
};

export default Header;
