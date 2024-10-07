import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import videoBg from "../../assets/video_ae_new_ipad.mp4";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Registre o plugin TextPlugin
gsap.registerPlugin(TextPlugin);

export const Main = () => {
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h3SpansRef = useRef<HTMLSpanElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animação de "digitação" para o título
    if (h2Ref.current) {
      const text = h2Ref.current.innerText;
      h2Ref.current.innerText = "";
      tl.to(h2Ref.current, {
        duration: text.length * 0.05,
        text: { value: text, delimiter: "" },
        ease: "none",
      });
    }

    // Animação de revelação para os spans dentro do h3
    h3SpansRef.current.forEach((span, index) => {
      tl.from(
        span,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        `-=${index === 0 ? 0 : 0.6}`
      );
    });

    // Animação do botão
    tl.from(
      buttonRef.current,
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.videoContainer}>
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          className={styles.video}
        ></video>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textBox}>
          <h2 ref={h2Ref}>SOMOS A UNITY COMUNICAÇÃO.</h2>
          <h3>
            {["FAZEMOS CAMPANHAS", "DE COMUNICAÇÃO", "EFICAZES."].map(
              (text, index) => (
                <span
                  key={index}
                  ref={(el) => el && (h3SpansRef.current[index] = el)}
                >
                  {text}
                </span>
              )
            )}
          </h3>
          <button className={styles.animatedButton} ref={buttonRef}>
            <span>DESCUBRA MAIS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
