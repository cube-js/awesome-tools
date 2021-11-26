import styles from "./Chip.module.scss";
import Img from 'react-optimized-image';

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
        {props.icon && (
          <Img
            className={styles.icon}
            src={require(`~/public/images/logo/${props.icon}`)}
            alt={props.title} />
        )}
        <span>{props.title}</span>
      </span>
    </button>
  );
}
