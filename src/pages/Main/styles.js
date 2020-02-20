import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .container {
    display: flex;
    padding: 50px;
    width: 80%;
    justify-content: center;
  }

  .modal-bg{
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

  .close{
    border: 0;
    background-color: transparent;
    -webkit-appearance: none;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      color: #e9ecef
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

  .modal-content form input{
    margin-top: 5px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
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
    margin-left: 15px;
    color: #ffffff;
    background-color: #45C857;
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
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    &:hover{
      background: #e9ecef
    }
  }

  h1, span {
    padding: 5px;
  }
`;
