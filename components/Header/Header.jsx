import styles from "./Header.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const isRoot = router.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.header__logo + " container custom-container"}>
        <a href="https://cube.dev/" target="_blank" aria-label="Cube">
          <span className={styles.header__logo}>
            <img src={`/images/logo/cubejs-logo.svg`} alt="Cube" />
          </span>
        </a>
        <ConditionalWrapper
          condition={!isRoot}
          wrapper={(children) => <Link href="/">{children}</Link>}
        >
          <span
            className={styles.header__text}
            active={!isRoot ? "active" : ""}
          >
            <img
              src={`/images/logo/cubejs-awesome-tools.svg`}
              alt="Awesome tools"
            />
          </span>
        </ConditionalWrapper>
      </div>
    </header>
  );
}

const ConditionalWrapper = ({ condition, wrapper, children }) => (
  <>{condition ? wrapper(children) : children}</>
);
