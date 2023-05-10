import { Container } from "./style";
import seta from "../../assets/ceta.png";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function SemiFooter() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.17, 0.18, 0.21], [0, 1, 0]);
  const bgone = useTransform(scrollYProgress, [0.10, 0.24], [5000, 0])
  const bgonescale = useTransform(scrollYProgress, [0.33, 0.34], [1, 0])
  const marginCard = useTransform(scrollYProgress, [0.22, 0.24, 0.34], [2000, 0, -1000])
  const opacityTextRpd = useTransform(scrollYProgress, [0.34, 0.38, 0.40], [0, 1, 0])
  const teste2 = useTransform(scrollYProgress, [0.41, 0.45], [-5000, 0])

  return (
    <>
      <Container style={{ color: "white" }}>
        <motion.div className="animations-one" style={{ opacity: scale }}>
          I present to you my story
        </motion.div>
        <motion.div className="Animation-two"
          style={{ color: "white", marginRight: bgone, opacity: bgonescale }}>
          <motion.div className="content" style={{ marginTop: marginCard }}>
            <div className="bg-photo">
              <img src="https://avatars.githubusercontent.com/u/111516927?v=4" alt="" />
              <div className="quebra">
                <strong >IGOR SILVA</strong>
                <span style={{ color: "gray" }}>developer</span>
              </div>
            </div>
            <motion.h1>As you already know, my name is Igor, I'm a programmer.
              I entered this life at age 14 when I dedicated myself to learning hacking techniques. since I
              didn't know anything relating to programming until then...
            </motion.h1>
          </motion.div>
        </motion.div>
        {/* card rapido */}
        <motion.h1 color="white" id="textRpd" style={{ opacity: opacityTextRpd }}>
          I decided that programming <strong style={{ background: "red" }}>wasn't</strong> for me, it was all too difficult and I didn't learn
        </motion.h1>

        {/* container mais animado */}
        <motion.div className="papel" style={{ marginLeft: teste2 }}>
          <h1>I tore the idea in half</h1>
        </motion.div>
        <div className="seta-flex">
          <span>scroll</span> <img src={seta} alt="" />
        </div>

      </Container>

    </>
  );
}
