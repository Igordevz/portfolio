import { CardLeft, Container } from "./style";
import projectone from '../../assets/project1.png'
export default function MainTwo(){
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
                     recreating <strong>chatgpt</strong> using its api available on <strong>OpenAi</strong></h2>
                     <p>
                        Website Fullstack
                     </p>
                     <a href="https://gpt-project3.netlify.app/" target="_blank">
                        VIEW PROJECT
                     </a>
                </div>
            </CardLeft>

        </Container>
    );
}