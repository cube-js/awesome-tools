import styles from "./Description.module.scss";

export default function Description(props) {
  return (
    <div className={styles.description}>
      {props.based && (
        <div className={styles.based}>
          <span>Based on</span>
          {props.based.map((tag) => (
            <span key={tag} className={styles.based__tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className={styles.description__text}>{props.description}</div>
    </div>
  );
}
