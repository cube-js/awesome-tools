import styles from "./AccentedText.module.scss";

export default function AccentedText(props) {
  return (
    <span
      className={
        props.className
          ? styles.accented + " " + props.className
          : styles.accented
      }
    >
      {props.children}
    </span>
  );
}
