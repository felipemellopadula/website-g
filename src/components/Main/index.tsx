// src/components/Main/index.tsx

import styles from "./styles.module.scss";
import videoBg from "../../assets/video_ae_new_ipad.mp4";

export const Main = () => {
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
          <h2 className={styles.animatedText}>SOMOS A UNITY COMUNICAÇÃO.</h2>
          <h3>
            <span className={styles.animatedText}>FAZEMOS CAMPANHAS</span>
            <span className={styles.animatedText}>DE COMUNICAÇÃO</span>
            <span className={styles.animatedText}>EFICAZES.</span>
          </h3>
          <button className={styles.animatedButton}>DESCUBRA MAIS</button>
        </div>
      </div>
    </section>
  );
};
