import styled from "styled-components";

export const Container = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

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
