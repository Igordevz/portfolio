import { CardLeft, Container } from "./style";
import projectone from "../../assets/project1.png";
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

export default function MainTwo() {
  useEffect(() => {
    
    new SplitType("#gpt");
    new SplitType("#openai");
    const hover = document.getElementById("gpt")
    const openai = document.getElementById("openai")
    openai?.addEventListener("mouseover", () =>{
      gsap.to(".char", {
        display: "inline-block",
        flexDirection: "row",
        filter: "blur(0px)",
        stagger: 0.05,
        delay: 0.5,
        duration: 1,
        opacity: 1,
        background: "none",
      });
    })
    hover?.addEventListener("mouseover", () =>{
      gsap.to(".char", {
        display: "inline-block",
        flexDirection: "row",
        filter: "blur(0px)",
        stagger: 0.05,
        delay: 0.2,
        duration: 1,
        opacity: 1,
        background: "none",
      });
    })
   
   
  });

  return (
    <Container>
      <div className="title">
        <h1>
          Selected <strong>Projects</strong>
        </h1>
      </div>
      <CardLeft>
        <img src={projectone} alt="" />
        <div className="items">
          <h1>Real estate Template</h1>
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
    </Container>
  );
}
