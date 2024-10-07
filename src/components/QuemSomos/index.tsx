import styles from "./styles.module.scss";

export const QuemSomos = () => {
  return (
    <section className={styles.quemSomosContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          SOMOS CRIATIVOS
          <br />
          SOMOS UNITY.
        </h2>
        <div className={styles.contentColumns}>
          <p className={styles.text}>
            Com 31 anos de história, acreditamos no poder transformador das
            ideias. Nossa essência está em criar e espalhar mensagens que fazem
            a diferença. Uma boa ideia tem o poder de transcender barreiras,
            conectar pessoas e impulsionar marcas.
          </p>
          <p className={styles.text}>
            Focamos nossa energia criativa em desenvolver soluções inovadoras
            que não apenas comunicam, mas também inspiram. Cada projeto é uma
            oportunidade de mostrar como uma ideia bem executada pode ter um
            impacto duradouro e significativo.
          </p>
        </div>
        <p>CONHEÇA NOSSA SOLUÇÕES PARA O SEU NEGÓCIO</p>
      </div>
    </section>
  );
};
