import styles from "./Card.module.scss";
import { ReactSVG } from "react-svg";

export default function Card(props) {
  return (
    <div
      color={props.color ? props.color : null}
      className={
        props.className ? styles.card + " " + props.className : styles.card
      }
    >
      {props.icon && (
        <ReactSVG
          className={styles.icon}
          wrapper="span"
          src={props.icon}
        ></ReactSVG>
      )}
      <div></div>
    </div>
  );
}
