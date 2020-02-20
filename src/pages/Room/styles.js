import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;

  #chat {
    height: 100%;
    width: 80%;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    width: 600px;
    border: 1px solid #ddd;
    height: 50px;
    padding: 0 20px;
    font-size: 14px;
  }

  button {
    width: 600px;
    height: 50px;
    font-size: 14px;
    background: #069;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    color: #FFF;
    margin-top: 10px;
    border: none;
  }

  .messages {
    width: 600px;
    height: 400px;
    margin: 20px 0;
    border: 1px solid #ddd;
    padding: 20px;
    overflow: scroll;
    scroll-behavior: auto;
  }

  .messages, input, button {
    max-width: 90%;
    max-height: 90%;
  }

  .messages::-webkit-scrollbar {
  display: none;
}

  li {
    list-style: none;
    padding: 5px;
  }
`;
