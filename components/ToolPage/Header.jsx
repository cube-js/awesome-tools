import styles from "./Header.module.scss";
import Button from "../Button";
import Img from 'react-optimized-image';

export default function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Img
          className={styles.title__img}
          src={require(`~/public/images/logo/${props.logo}`)}
          sizes={[77]}
          alt={`${props.title} logo`} />
        <h2 className={styles.title__text}>
          {props.title}
          {props.developer && (
            <span className={styles.title__developer}>
              &nbsp;by&nbsp;{props.developer}
            </span>
          )}
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
