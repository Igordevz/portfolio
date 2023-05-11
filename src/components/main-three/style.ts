import styled from "styled-components";

export const Container = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow-x: hidden;

  #Container {
    width: 100%;
    height: 100vh;
    transform: translateX(-1000px);
    display: none;
    opacity: 0;
    position: absolute;
    animation: animator 3s;
  }

  @keyframes animator {
    0% {
      display: flex;
      width: 0%;
      background: #000;
      transform-origin: right;
      z-index: 999;
    }
    50% {
      display: flex;
      background: #000;
      z-index: 999;
      width: 100%;
      background: #222222;
    }
    50% {
      z-index: 999;
      display: flex;
      transform: translateX(0px);
    }
    54% {
      display: flex;
      transform: translateX(500px);
      z-index: 999;
    }
    60% {
      background: #000000;
      transform: translateX(900px);
    }
    70% {
      z-index: 999;
      display: flex;
      transform: translateX(1500px);
    }
    100% {
      transform: translateX(5500px);
    }
    100% {
      background: black;
    }
  }
  .animator1 {
    z-index: 99;
    display: none;
    animation: opacity 2s;
  }
  @keyframes opacity {
    0% {
      z-index: 99;
      opacity: 0;
    }
    50% {
      z-index: 99;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const ContainerTour = styled.div`
  position: relative;
  header .title {
    position: absolute;
    left: 40px;
    margin-top: -10px;
    font-size: 30px;
  }
  header {

  z-index: 9;
    position: fixed;
    top: 0;
    color: black;
    align-items: center;
    display: flex;
    height: 80px;
    width: 100%;
  }
  header nav {
    position: absolute;
    display: flex;
    right: 90px;
    gap: 50px;
    cursor: pointer;
    h1 {
      font-size: 15px;
      position: relative;
    }
    h1::after {
      content: "";
      width: 100%;
      height: 2px;
      background: black;
      position: absolute;
      left: 0;
      bottom: 5px;
    }
    img {
      z-index: 99;
    }
  }
  @media (max-width: 584px){
    header nav h1{
      display: none;
    }
    header nav{
      right: 40px;
    }
  }
`;
export const NavMenu = styled.div`
  position: fixed;
  display: none;
  top: 0;
  right: 0;
  height: 100vh;
  width: 40%;
  background: black;
  transform: translateX(2000px);
`;
export const MainContent = styled.div`
  height: 80vh;
  margin-top: 100px;
  .title {
    gap: 50px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    color: black;
  }
  .title .char {
    transform: translateY(115px);
    transition: transform 0.5s;
  }
  .scroll {
    position: fixed;
    top: 100px;
    right: 50px;
    width: 3px;
    background: white;
    height: 300px;
  }
  .title h1 {
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    color: black;
    margin-left: 40px;
    font-size: 250px;
  }
  .title p {
    font-size: 18px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    font-family: "Poppins", sans-serif;
    max-width: 350px;
    font-weight: 400;
  }
  .swiperx {
    display: flex;
    animation: girator 11s infinite ease-out;
    flex-direction: row;
    color: black;
    position: absolute;
    bottom: 40px;
    gap: 350px;
  }
  .swiperx h2 {
    font-size: 150px;
  }
  @keyframes girator {
    0% {
      transform: translateX(-100px);
    }

    50% {
      transform: translateX(-2000px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  @media (max-width: 1102px){
    .title h1{
      font-size: 150px;
    }
  }
  @media (max-width: 850px){
    .title h1{
      font-size: 100px;
    }
    .title p{
      font-size: 14px;
      max-width: 200px;
    }
    
  }
  @media (max-width: 568px){
    .title{
      gap: 20px;
    }
    .title p{
    margin-left: 50px;
    }
    .title h1{
      font-size: 80px;
    }
  }
`;

export const ContainerThree = styled.div`
  height: 100vh;
  width: 100%;
  background: red;
  z-index: 9900009;
`;
