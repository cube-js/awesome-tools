import styles from "./GetHelpCard.module.scss";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link href={props.href} legacyBehavior>
      <a target="_blank">
        <div
          className={
            props.className ? styles.card + " " + props.className : styles.card
          }
        >
          {props.icon && (
            <div
              className={styles.icon}
              style={{ backgroundImage: `url(${props.icon})` }}
            ></div>
          )}
          {props.title && <div className={styles.title}>{props.title}</div>}
          {props.footer && <div className={styles.footer}>{props.footer}</div>}
        </div>
      </a>
    </Link>
  );
}
