import { Container, ContainerTour, MainContent, NavMenu } from "./style";
import { useEffect, useState } from 'react'
import { motion, useTransform, useViewportScroll } from "framer-motion";
import gsap from 'gsap'
import close from '../../assets/x.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import menu from '../../assets/menu.png'
import SplitType from "split-type";

export default function SemiFooter() {
  const { scrollYProgress } = useViewportScroll()
  const [menus, setMenus] = useState(true)
  const scale = useTransform(scrollYProgress, [0.65, 0.70], [0, 1]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#Container", {
      scrollTrigger: {
        trigger: "#Container",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart pause reverse"
      },
      display: "flex",
      x: 0,
      opacity: 1,
      duration: 0.1,
    })
    gsap.to('.animator1', {
      scrollTrigger: {
        trigger: ".animator1",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart pause reverse"
      },
      display: "flex",
    })
    const menusBtn = document.getElementById("menus")
    const close = document.getElementById("close")

    menusBtn?.addEventListener("click", () => {
      gsap.to(".navmenu", {
        x: 0,
        display: "flex",
        duration: 1,
      })
    })
    close?.addEventListener("click", () => {
      gsap.to(".navmenu", {
        x: 2000,
        display: "none",
        duration: 1,
      })
    })
    new SplitType("#brand");
    new SplitType("#textinfo")
    gsap.to(".char", {
      scrollTrigger: {
        trigger: ".animator1",
        start: "top center",
        end: "bottom center",
        toggleActions: "restart pause reverse"
      },
      y: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 1
    })

  })


  return (
    <>
      <Container style={{ color: "white" }} className=".bg" id="items-about" >

        <div id="Container">
        </div>
        <motion.div style={{
          background: "#F0EFF1",
          opacity: scale,
          width: "100%",

        }} className="animator1">

          <ContainerTour color="black" className="tour">
            <header>
              <div className="title">Igor</div>
              <nav id="nav-index">
                <h1>Let's work together</h1>
                {menus ? (
                  <img src={menu} alt="" width={38} id="menus" onClick={() => setMenus(!menus)} />
                ) : (
                  <img src={close} alt="" width={23} id="close" onClick={() => setMenus(!menus)} />
                )}
              </nav>
            </header>
            <NavMenu className="navmenu">
              <h1>1ola</h1>
            </NavMenu>

            <MainContent>
              <div className="title">
                <h1 id="brand">Brazil</h1>
                <p id="textinfo">I'm from Brazil, I specialized in Front-End and today I'm fullstack, I also develop in mobiles</p>
              </div>
              <div className="swiperx">
                <h2>experience</h2>
                <h2>experience</h2>
                <h2>experience</h2>
              </div>
            </MainContent>
          </ContainerTour>

        </motion.div>
      </Container>

    </>
  );
}