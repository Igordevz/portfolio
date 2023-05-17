import styled from "styled-components";

export const HeaderContent = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  z-index: 9999;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.84);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
export const Logo = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  h1 {
    margin-left: 50px;
    font-family: "Work Sans", sans-serif;
    color: white;
    font-size: 30px;
    font-weight: 100;
  }
`;
export const NavBar = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 40px;
  nav a {
    text-decoration: none;
    font-weight: 400;
    font-size: 15px;
    margin-right: 40px;
    font-family: "Work Sans", sans-serif;
    color: #fff;
    position: relative;
  }
  nav a:hover {
    color: #b388d3;
    animation: animator 1;
  }

  nav a::after {
    transform-origin: top;
    content: "";
    background: white;
    height: 2px;
    position: absolute;
    bottom: -5px;
    border-radius: 50px;
    left: 2px;
    background: #b388d3;
    scale: 0;
    transform-origin: right;
    width: 100%;

    transition: scale 0.55s;
  }
  nav a:hover::after {
    transform-origin: bottom;
    width: 25%;
    color: #b388d3;
    transform-origin: left;
    scale: 1;
  }
  @media (max-width: 606px) {
    display: none;
  }
`;

export const NavBarResponsive = styled.div`
  bottom: 0;
  height: 80px;
  position: fixed;
  right: 40px;
  display: none;
  z-index: 999999;

  align-items: center;
  justify-content: center;
  @media (max-width: 606px) {
    display: flex;
  }
  img {
    z-index: 999999;
    width: 50px;
    position: absolute;
    padding: 15px;
    background: white;
    border-radius: 50px;
  }
`;
export const ContainerNavResponse = styled.div`
  background: #e6e6e6;
  position: fixed;
  display: none;
  z-index: 2;
  justify-content: center;
  gap: 50px;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  transform: translateX(2000px);

  a {
    font-size: 20px;
    margin-left: 40px;
    text-decoration: line-through;
    color: black;
    position: relative;
  }
  a:hover {
    font-size: 25px;
  }
  a:after {
    width: 100%;
    height: 5px;
    border-radius: 30px;
    background: white;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
  @media (max-width: 609px) {
    display: flex;
  }
`;
