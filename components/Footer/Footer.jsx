import styles from "./Footer.module.scss";
import { ReactSVG } from "react-svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container custom-container">
        <div>
          <ReactSVG
            className={styles.footer__logo}
            src="/images/logo/cubejs-logo.svg"
          />
        </div>
        <div className={styles.info}>
          <p>
            Created and maintained in open source
            <br />
            by{" "}
            <a href="https://cube.dev/" target="_blank">
              Cube Dev
            </a>
            , the creators of{" "}
            <a href="https://github.com/cube-js/cube.js" target="_blank">
              Cube.js
            </a>
          </p>
          <p>
            Want to add a new tool or update the info?{" "}
            <br className="xs-hidden" />
            We appreciate{" "}
            <a href="https://github.com/cube-js/awesome-tools/issues" target="_blank">
              issues
            </a>
            {" "}and{" "}
            <a href="https://github.com/cube-js/awesome-tools/pulls" target="_blank">
              pull requests
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
