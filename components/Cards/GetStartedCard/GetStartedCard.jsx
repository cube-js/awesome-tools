import styles from "./GetStartedCard.module.scss";
import { ReactSVG } from "react-svg";

export default function Card(props) {
  return (
    <a href={props.link} target="_blank">
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
        {props.type && <div className={styles.type}>{props.type}</div>}
        {props.title && <div className={styles.title}>{props.title}</div>}
        {props.link && (
          <div className={styles.link}>
            <span className="link">Read more →</span>
          </div>
        )}
      </div>
    </a>
  );
}
