import styles from "./Header.module.scss";
import Button from "../Button";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <div
          className={styles.title__img}
          style={{ backgroundImage: `url(${props.logo})` }}
          // src={props.logo}
          // alt={`${props.title} logo`}
        >
          {/* <img /> */}
        </div>
        <h2 className={styles.title__text}>
          {props.title__text}
          {props.title}
        </h2>
        {props.achievement && (
          <div>
            <img
              className={styles.achievement}
              src={`/images/${props.achievement}.svg`}
              alt="tool label"
            />
          </div>
        )}
      </div>
      <div className={styles.buttons}>
        {props.github && (
          <Button target="_blank" href={`https://github.com/${props.github}`}>
            GitHub
          </Button>
        )}
        {props.website && (
          <Button target="_blank" href={props.website}>
            Website
          </Button>
        )}
      </div>
    </div>
  );
}
