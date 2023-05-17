import styled from "styled-components";

export const GaleryContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
  }
`;
export const Line = styled.div`
  position: absolute;
  height: 1px;
  top: 0;
  width: 70%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(105, 29, 193, 1) 100%
  );
`;
export const ContainerItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 15px;
    margin-bottom: 20px;
    font-weight: 400;
  }
  p {
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    max-width: 400px;
    color: white;
  }
  strong {
    font-weight: 400;
    color: #7d7d7e;
  }
  img{
    padding: 3px;
    border: 1px solid #7028C4;
    transition: 1s;
    width: 200px;
    border-radius: 20px;
    height: 250px;
  }
  .galery {
    gap: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  .selected {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
  .galery {
    margin-left:150px;
  }
  img:hover{
    border: 1px solid white;

    transform: scale(1.1);
  }
`;
