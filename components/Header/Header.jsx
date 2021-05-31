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
        <div className="container custom-container">
          <Link href="/">
            <ReactSVG
              active="active"
              className={styles.header__logo}
              src="/images/logo/cubejs-awesome-tools.svg"
            />
          </Link>
        </div>
      </header>
    );
  }
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
