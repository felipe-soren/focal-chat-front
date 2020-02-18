import styled from 'styled-components';

export const Container = styled.header`
  height: 50px;
  padding: 0 30px;
  background: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.10);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.10);
  box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.10);

  a {
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
  }
`;