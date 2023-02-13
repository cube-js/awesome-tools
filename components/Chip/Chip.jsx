import styles from "./Chip.module.scss";

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
          <img
            className={styles.icon}
            src={`/images/logo/${props.icon}`}
            alt={props.title}
          />
        )}
        <span>{props.title}</span>
      </span>
    </button>
  );
}
