import styled from "styled-components";

export const ContentMain = styled.div`
  height: 100vh;
  width: 100%;
  background: rgb(23, 42, 135);
  background: radial-gradient(
    circle,
    rgba(23, 42, 135, 1) 0%,
    rgba(0, 0, 0, 1) 35%
  );
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  img {
    position: absolute;
    bottom: 20px;
    animation: move 2s infinite;
  }
  @keyframes move {
    0% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-50px);
    }
  }
  .center {
    h1 {
      text-align: center;
      max-width: 700px;
      color: #8a8a8e;
      font-weight: 300;
    }
    strong {
      opacity: 1;
      color: white;
    }
  }
  .flexivel {
    cursor: pointer;
  }
  @media (max-width: 647px){
    .center h1{
        margin-inline: 10px;
        font-size: 25px;
    }
  }
  @media (max-width: 326px){
    .center h1{
        margin-inline: 10px;
        font-size: 20px;
    }
  }
  
`;
