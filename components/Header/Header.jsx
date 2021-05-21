import styles from "./Header.module.scss";
import { ReactSVG } from "react-svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container custom-container">
        <ReactSVG
          className={styles.header__logo}
          src="/images/logo/cubejs-awesome-tools.svg"
        />
      </div>
    </header>
  );
}
