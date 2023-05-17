import { gsap } from "gsap";
import { ContactContainer } from "./style";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Contact() {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() =>{
    gsap.to(".tour", {
      scrollTrigger: {
        trigger: "#footer",
        start: "top",
        end:  "bottom"
      },
      display: "none",
    })
    
  })
  return (
      <ContactContainer id="footer">
          <h1>ola mundo</h1>
      </ContactContainer>
  )
}
