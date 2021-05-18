import styles from "./ToolCard.module.scss";

export default function ToolCard(props) {
  return (
    <div className={styles.toolCard} shadow={props.shadow}>
      <div className="flex">
        <img
          className={styles.toolCard__logo}
          src={props.src || ""}
          alt={props.alt || ""}
        />
        <h4 className={styles.toolCard__title}>{props.title || ""}</h4>
      </div>
    </div>
  );
}
