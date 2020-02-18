import styled from 'styled-components';

export const Container = styled.div`
  .room-card{
    width: 300px;
    height: 350px;
    background-color: #ffffff;
    border-radius: 10px;
    justify-content: center;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.34);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.34);
    box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.34);
  }

  .header {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #000;
    width: 100%;
    height: 70%;
    background-size:cover; 
    background-position:center center; 
    background-repeat:no-repeat; 
    background-image:url('https://catracalivre.com.br/wp-content/thumbnails/LxuSOj5zH7YOig6uphmklFaCYgw=/wp-content/uploads/2019/03/bolsonaro-eua.jpeg');
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
    &:hover{
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
    padding-bottom: 10px
  }

`;
