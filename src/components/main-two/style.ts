import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  .title {
    position: absolute;
    top: 0;
    margin-top: 50px;
    margin-left: 60px;
  }
  .title h1 {
    color: #7d7e81;
    font-weight: 200;
    font-size: 25px;
  }
  .title strong {
    color: white;
  }
`;
export const CardLeft = styled.div`
  margin-left: 60px;
  border-radius: 25px;
  img {
    border-radius: 10px;
    height: 320px;
    width: 500px;
    cursor: pointer;
  }
  strong{
    margin-left: 4px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  .items {
    margin-left: 20px;
    h1 {
      margin-top: 50px;
      font-size: 14px;
    }
    h2 {
      display: flex;
      flex-wrap: wrap;
      font-size: 20px;
      font-weight: 200;
      margin-top: 20px;
      max-width: 500px;
    }
    p {
      font-weight: 100;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .line{
        display: flex;
        width: 0px;
      }
    a{

      color: white;
      .char{
        background: none;
        display: flex;
        filter: blur(5px);
       
      }
      position: relative;
    }
   
    a:hover{
   
      .char{
        filter: blur(0);
        background: white;
        display: none;
      }
    }
    
  #github{
    border: 1px solid #7d27c1;
    padding: 10px;
    text-decoration: none;
    border-radius: 3px;
    transition: all.5s;
    color: #7d27c1;
  }
    #github:hover{
        background: #7229E6;
        color: #e3e4e6;
        border: 1px;
    }
    color: #e3e4e6;
  }
`;
