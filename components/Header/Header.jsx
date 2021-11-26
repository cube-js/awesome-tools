import styles from "./Header.module.scss";
import { ReactSVG } from "react-svg";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const isRoot = router.pathname === "/";
  if (!isRoot) {
    return (
      <header className={styles.header}>
        <div className={styles.header__logo + " container custom-container"}>
          <a href="https://cube.dev/" target="_blank" aria-label="Cube">
            <ReactSVG
              wrapper="span"
              active="active"
              className={styles.header__logo}
              src="/images/logo/cubejs-logo.svg"
            />
          </a>
          <Link href="/">
            <ReactSVG
              active="active"
              className={styles.header__text}
              wrapper="span"
              src="/images/logo/cubejs-awesome-tools.svg"
            />
          </Link>
        </div>
      </header>
    );
  }
  // without link to homepage
  return (
    <header className={styles.header}>
      <div className={styles.header__logo + " container custom-container"}>
        <a href="https://cube.dev/" target="_blank" aria-label="Cube">
          <ReactSVG
            wrapper="span"
            active="active"
            className={styles.header__logo}
            src="/images/logo/cubejs-logo.svg"
          />
        </a>
        <ReactSVG
          className={styles.header__text}
          wrapper="span"
          src="/images/logo/cubejs-awesome-tools.svg"
        />
      </div>
    </header>
  );
}
