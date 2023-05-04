import { CardLeft, Container } from "./style";
import projectone from '../../assets/project1.png'
import { useEffect } from "react";
import SplitType from 'split-type'
import { gsap } from "gsap";

export default function MainTwo(){

    useEffect(() =>{
        const myText = new SplitType('#gpt')
        const myText2 = new SplitType('#openai')

        const hover = document.getElementById('gpt')
       
        let animation =    gsap.to('.char', {
            display: "inline-block",
            stagger: 0.05,
            delay: .5,
            duration: 1,
            background: "none",
            repeat: -1,
            paused: true,
        })
        
        hover?.addEventListener('mousemove', () =>{
            animation.play()
            if(animation  ){
                animation.restart();
                // fazwer isso
            }
        })
        hover?.addEventListener('mouseleave', () =>{
            animation.pause();

        })

    },)

    return(
        <Container>
            <div className="title">
                <h1>Selected <strong>Projects</strong></h1>
            </div>
            <CardLeft>
                <img src={projectone} alt="" />
                <div className="items">
                    <h1>Real estate Template</h1>
                    <h2>this project is based on the idea of 
                     recreating <strong>
                            <a href="https://chat.openai.com/" target="_blank" id="gpt">chatgpt</a>
                        </strong> using its api available on <strong>
                            <a href="https://openai.com/" target="_blank" id="openai">OpenAi</a>
                        </strong></h2>
                     <p>
                        Website Fullstack
                     </p>
                     <a href="https://gpt-project3.netlify.app/" target="_blank" id="github">
                        VIEW PROJECT
                     </a>
                </div>
            </CardLeft>

        </Container>
    );
}