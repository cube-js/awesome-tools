import styles from "./Header.module.scss";
import Button from "../Button";

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <img
          className={styles.title__img}
          src={`/images/logo/${props.logo}`}
          alt={`${props.title} logo`}
        />
        <h1 className={styles.title__text}>
          {props.title}
          {props.developer && (
            <span className={styles.title__developer}>
              &nbsp;by&nbsp;{props.developer}
            </span>
          )}
          {props.framework && (
            <span className={styles.title__framework}>
              &nbsp;for&nbsp;{props.framework}&nbsp;developers
            </span>
          )}
        </h1>
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
