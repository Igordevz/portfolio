import { ContainerNavResponse, HeaderContent, Logo, NavBar, NavBarResponsive } from "./style";
import menuligth from "../../assets/menu-ligth.png"
import { useEffect, useState } from "react";
import close from "../../assets/x-dark.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Header() {

  const [menu, setMenu] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const menubtn = document.getElementById("menu")
    const responseContainer = document.getElementById("response")
    const close = document.getElementById("close")

    menubtn?.addEventListener("click", () => {
      gsap.to("#response", {
        display: "flex",
        x: 0,
        duration: 2,
      })
    })
     close?.addEventListener("click", () => {
      responseContainer?.setAttribute("style", "display: none")
      gsap.to("#response", {
        display: "none",
        x: 2000, 
        duration: 2,
      })
    })
    gsap.to("#nav-index", {
      scrollTrigger: {
        trigger: "#github",
      },
      display: "none",
    })

    gsap.to("#nav-index", {
      scrollTrigger: {
        trigger: "#items-about",
      },
      display: "flex",
    })
  })

  return (
    <>
      <HeaderContent className="item" >
        <Logo>
          <h1>IGOR</h1>
        </Logo>
        <NavBar>
          <nav>
            <a href="#" id="one">HOME</a>
            <a href="#projetos" id="two">PROJECTS</a>
            <a href="#items-about" id="three">ABOUT</a>
          </nav>
        </NavBar>
        
      </HeaderContent>

      <NavBarResponsive>
          {menu ? (
            <img src={menuligth} alt=""  onClick={() => setMenu(!menu)} id="menu" />
          ) : (
            <>
              <img src={close} alt=""  onClick={() => setMenu(!menu)} id="close" />
            </>
          )}
        </NavBarResponsive>
      <ContainerNavResponse id="response">
            <a href="#" >HOME</a>
            <a href="#projetos">PROJECTS</a>
            <a href="#projetos">ABOUT</a>

      </ContainerNavResponse>
    </>
  );

}