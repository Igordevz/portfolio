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
    border-radius: 20px;
    height: 400px;
    width: 500px;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  flex-direction: row;
  .items {
    margin-left: 20px;
    h1 {
      margin-top: 50px;
      font-size: 14px;
    }
    h2 {
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
    a {
      border-radius: 10px;
      margin-top: 50px;
      text-decoration: none;
      padding: 10px;
      border: 1px solid #7d7d7e;
        color: white;
        transition: 1s;
    }

    a:hover{
        border: 1px solid #7d27c1;
        background-image: -webkit-linear-gradient(0deg, #a836ff 16%, #0826d1 78%);
      background-clip: text;
      -webkit-background-clip: text;
      text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
    }
    color: #e3e4e6;
  }
`;
