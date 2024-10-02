import { useState } from "react";
import styles from "./styles.module.scss";
import Logo from "../../assets/LogoUnity3dB.png";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div
          className={`${styles.burger} ${isActive ? styles.active : ""}`}
          onClick={handleBurgerClick}
          aria-label="Menu"
          role="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.menuOverlay} ${isActive ? styles.active : ""}`}>
        <nav className={styles.menuItems}>
          <ul>
            <li>
              <a href="#servicos">SERVIÇOS</a>
            </li>
            <li>
              <a href="#trabalhos">TRABALHOS</a>
            </li>
            <li>
              <a href="#quem-somos">QUEM SOMOS</a>
            </li>
            <li>
              <a href="#contato">CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
