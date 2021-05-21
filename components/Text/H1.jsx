import styles from "./H1.module.scss";

export default function H1(props) {
  return <h1 className={styles.title}>{props.children}</h1>;
}
