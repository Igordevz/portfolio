import { CardLeft, Container } from "./style";
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
export default function MainTwo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    new SplitType("#gpt");
    new SplitType("#openai");
    const hover = document.getElementById("gpt")

    hover?.addEventListener("mouseover", () =>{
      gsap.to(".char", {
        display: "inline-block",
        flexDirection: "row",
        filter: "blur(0px)",
        stagger: 0.05,
        delay: 0.2,
        duration: 1,
        opacity: 1,
        scrollTrigger: ".items",
        background: "none",
      });
    })
   
   
  });

  return (
    <Container>
      <div className="title" id="projetos">
        <h1>
          Selected <strong>Projects</strong>
        </h1>
      </div>
      <CardLeft>
        <div className="items">
          <h1>Chat-Gpt interation</h1>
          <h2>
            this project is based on the idea of recreating{" "}
            <strong>
              <a href="https://chat.openai.com/" target="_blank" id="gpt">
                chatgpt
              </a>
            </strong>{" "}
            using its api available on{" "}
            <strong>
              <a href="https://openai.com/" target="_blank" id="openai">
                OpenAi
              </a>
            </strong>
          </h2>
          <p>Website Fullstack</p>
          <a
            href="https://gpt-project3.netlify.app/"
            target="_blank"
            id="github"
          >
            VIEW PROJECT
          </a>
        </div>
      </CardLeft>
      <CardLeft>
        <div className="items">
          <h1>Instagram UI</h1>
          <h2>
            this project is based on the idea of recreating{" "}

            <strong>
              <a href="www.instagram.com" target="_blank" id="gpt">
               Instagram
              </a>
            </strong>{" "}
            <strong>
            </strong>
          </h2>
          <p>Website Fullstack</p>
          <a
            href="https://instagram-pc.netlify.app/"
            target="_blank"
            id="github"
          >
            VIEW PROJECT
          </a>
        </div>
      </CardLeft>
      
    </Container>
  );
}
// deixar um ver mais e abri no github
