import styles from "./H2.module.scss";

export default function H2(props) {
  return (
    <h2
      {...props}
      className={
        props.className ? styles.h2 + " " + props.className : styles.h2
      }
    >
      {props.children}
    </h2>
  );
}
