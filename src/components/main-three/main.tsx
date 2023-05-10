import { Container } from "./style";
import { useEffect } from 'react'
// import seta from "../../assets/ceta.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SemiFooter() {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0.90, 1], [0, 1]);
  useEffect(() =>{
  gsap.registerPlugin(ScrollTrigger)
  
    gsap.to("#Container", {
        scrollTrigger: {
          trigger: "#Container",
          start: "top center",
          end:"bottom center",
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
        end:"bottom center",
        toggleActions: "restart pause reverse"
      },
      display: "flex",
    })
  })

  return (
    <>
      <Container style={{ color: "white" }} className=".bg" >
   
        <div id="Container">
        </div>
        <motion.div style={{
           background: "#282A3A",
            opacity: scale,
            width: "100%",
          }} className="animator1">

        </motion.div>
      </Container>

    </>
  );
}
