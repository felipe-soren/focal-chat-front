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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    flex: 1;
    border: 1px solid #ddd;
    min-height: 50px;
    padding: 0 20px;
    font-size: 14px;
  }

  .btn {
    cursor: pointer;
    display: flex;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    background-color: #13AA52;
    color: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
    margin-left: 5px;
  }

  .send-section {
    display: flex;
    width: 80%;
    justify-content: space-between;
  }

  .messages {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60%;
    margin: 20px 0;
    border: 1px solid #ddd;
    padding: 20px;
    overflow: scroll;
    scroll-behavior: auto;
  }

  @media only screen and (max-width: 600px) {
  .messages, input {
    max-width: 90%;
    max-height: 90%;
  }
}

  .messages::-webkit-scrollbar {
    display: none;
  }

  li {
    list-style: none;
    padding: 5px;
    width: 100%;
  }

  .wraper {
    width: 0px;
  }
  
  .message-container {
    padding: 15px;
    display: inline-block;
    max-width: 80%;
    background-color: green;
    word-break: break-all;
    border-radius:7px;
    background-color: #ededed;
  }

  span {
    font-weight: bold;
  }
`;
