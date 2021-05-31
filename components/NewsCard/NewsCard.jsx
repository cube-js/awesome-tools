import styles from "./NewsCard.module.scss";
import { ReactSVG } from "react-svg";

export default function NewsCard(props) {
  console.log(props);
  return (
    <div className={styles.news} gray={props.color === "gray" ? "gray" : null}>
      <div className={styles.avatar}>
        <img width="43px" height="43px" src={props.image} alt="tweet avatar" />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>{props.user}</div>
        <div className={styles.text}>{props.text}</div>
      </div>
    </div>
  );
}
