import styles from "./Chip.module.scss";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

export default function Chip(props) {
  return (
    <span className={styles.chip} active={props.active}>
      {props.src && (
        <ReactSVG
          className={styles.icon}
          wrapper="span"
          src={props.src}
        ></ReactSVG>
      )}
      <span>{props.children}</span>
    </span>
  );
}

Chip.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
};
