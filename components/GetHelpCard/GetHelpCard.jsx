import styles from "./GetHelpCard.module.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link href={props.href}>
      <a target="_blank">
        <div
          className={
            props.className ? styles.card + " " + props.className : styles.card
          }
        >
          {props.icon && (
            <ReactSVG
              className={styles.icon}
              wrapper="div"
              src={props.icon}
            ></ReactSVG>
          )}
          {props.title && <div className={styles.title}>{props.title}</div>}
          {props.footer && <div className={styles.footer}>{props.footer}</div>}
        </div>
      </a>
    </Link>
  );
}
