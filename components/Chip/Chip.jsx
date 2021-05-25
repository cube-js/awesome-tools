import styles from "./Chip.module.scss";
import { ReactSVG } from "react-svg";

export default function Chip(props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={
        props.className ? styles.chip + " " + props.className : styles.chip
      }
      active={props.active}
    >
      <span>
        {props.src && (
          <ReactSVG
            className={styles.icon}
            wrapper="span"
            src={props.src}
          ></ReactSVG>
        )}
        <span>{props.children}</span>
      </span>
    </button>
  );
}
