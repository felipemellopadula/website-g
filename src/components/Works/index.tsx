import styles from "./styles.module.scss";

export const Works = () => {
  return (
    <section>
      <div>
        <h2>TRABALHAR RECENTES</h2>
        <h3>OFERECEMOS CAMPANHAS PUBLICITÁRIAS QUE IMPACTAM</h3>
      </div>
      <div className={styles.containerGrid}>
        <div className={styles.img}></div>
        <div className={styles.text}></div>
      </div>
      <div className={styles.containerGrid}>
        <div className={styles.img}></div>
        <div className={styles.text}></div>
      </div>
      <div className={styles.containerGrid}>
        <div className={styles.img}></div>
        <div className={styles.text}></div>
      </div>
      <div className={styles.containerGrid}>
        <div className={styles.img}></div>
        <div className={styles.text}></div>
      </div>
    </section>
  );
};
