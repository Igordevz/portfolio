import styled from "styled-components";

export const Container = styled.div`
  background: #000;

  strong {
    margin-right: 5px;
  }
  height: 200vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  .title {
    position: absolute;
    top: 0;
    margin-top: 50px;
  }
  .title h1 {
    color: #7d7e81;
    font-weight: 200;
    font-size: 25px;
  }
  .title strong {
    color: white;
  }
  @media (max-width: 1042px) {
    height: 100vh;
    .title {
      margin-left: 0px;
    }
  }
  @media (max-height: 653px) {
    height: 150vh;
  }
`;
export const CardLeft = styled.div`
  margin-top: 150px;
  border-radius: 25px;
  img {
    border-radius: 30px 30px 30px 0px;
    height: 320px;
    width: 500px;
    cursor: pointer;
  }
  :nth-child(2) {
    img {
      border-radius: 30px 30px 0px 30px;
    }
  }
  strong {
    margin-left: 4px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  .items {
    margin-left: 40px;
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
    .line {
      display: flex;
      width: 0px;
    }
    a {
      color: white;
      text-decoration: none;
      .char {
        display: none;
        background: none;
      }
      position: relative;
    }
    a:hover {
      transition: 1s;
      .char {
        background: white;
        display: none;
      }
      color: white;
    }

    #github {
      border: 1px solid #7d27c1;
      padding: 10px;
      text-decoration: none;
      border-radius: 10px 10px 10px 0px;
      transition: all.5s;
      color: #7d27c1;
    }
    #github:hover {
      color: white;
      border: 1px solid white;
    }
    color: #e3e4e6;
  }
  @media (max-width: 1042px) {
    margin-top: 90px;
    img {
      display: none;
    }
  }
`;
