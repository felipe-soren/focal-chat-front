import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 60em) {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 40em) {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
    }
  }

  .room-card {
    margin: 10px;
    width: 300px;
    height: 350px;
    background-color: #ffffff;
    border-radius: 10px;
    justify-content: center;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.34);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.34);
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.34);
  }

  .header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #000;
    width: 100%;
    height: 70%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .opacity {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 100%;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: #000;
      opacity: 0.5;
      p {
        display: flex;
      }
    }
  }

  .opacity p {
    display: none;
    font-size: 90px;
  }

  .content {
    padding: 15px;
    height: auto;
  }

  .content .decription {
    font-weight: bold;
  }

  .content .title {
    font-weight: bold;
    color: #848d95;
    font-size: 25px;
    padding-bottom: 10px;
  }

  .modal-bg {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .close {
    border: 0;
    background-color: transparent;
    -webkit-appearance: none;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: #e9ecef;
    }
  }

  .modal-content {
    height: auto;
    max-height: 500px;
    width: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #ffffff;
    justify-content: flex-start;
  }

  .modal-content form {
    padding: 1rem;
  }

  .modal-content form input {
    margin-top: 5px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #000000;
    font-size: 20px;
    padding-left: 5px;
  }

  .modal-footer {
    display: flex;
    margin-top: auto;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    justify-content: flex-end;
  }

  .btn {
    cursor: pointer;
    margin-left: 15px;
    color: #ffffff;
    background-color: #45c857;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    &:hover {
      background: #e9ecef;
    }
  }

  h1,
  span {
    padding: 5px;
  }
`;
