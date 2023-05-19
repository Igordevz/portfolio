import { ContainerItem, GaleryContainer, Line } from "./style";
import photo1 from "../../assets/photo1.png"
import photo2 from "../../assets/photo2.png"
import photo3 from "../../assets/photo3.png"

export default function Galery() {
  return (
    <GaleryContainer>
      <Line />
      <ContainerItem>
        <div className="title">
          <h1>A BIT ABOUT ME</h1>
          <p> <strong>I am a UI/UX designer who is passionate about creating</strong> beautiful and joyful digital experiences. Besides design, I love
            music, games and travelling. </p>
        </div>
        <div className="galery">
          <a href="https://instagram-pc.netlify.app/" target="_blank">
            <img src={photo1} alt="" />
          </a>
          <div className="selected">
            <a href="https://twitter-clone-by-igor.netlify.app/" target="_blank">

              <img src={photo2} alt="" />
            </a>
            <a href="https://discord-igor.netlify.app/">
              <img src={photo3} alt="" />
            </a>

          </div>
        </div>
      </ContainerItem>
    </GaleryContainer>
  );

}