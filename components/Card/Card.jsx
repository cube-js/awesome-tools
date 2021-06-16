import styles from "./Card.module.scss";
import { ReactSVG } from "react-svg";

export default function Card(props) {
  let Wrapper = "a";
  if (props.notLink) {
    Wrapper = "div";
  }
  return (
    <Wrapper
      href={props?.link}
      target="_blank"
      role="button"
      className={props.height ? styles.full : null}
    >
      <div
        big={props.isBig ? "big" : null}
        color={props.color ? props.color : null}
        className={
          props.className ? styles.card + " " + props.className : styles.card
        }
        height={props.height || null}
      >
        {props.icons &&
          props.icons.map((icon) => {
            return (
              <ReactSVG
                key={icon}
                className={styles.icon}
                wrapper="span"
                src={icon}
                width="100%"
                height="100%"
              ></ReactSVG>
            );
          })}
        {props.icon && (
          <ReactSVG
            className={styles.icon}
            wrapper="div"
            src={props.icon}
          ></ReactSVG>
        )}
        <div className={styles.text}>{props.text}</div>
        {props.description && (
          <div className={styles.description}>{props.description}</div>
        )}
        {props.smallText && (
          <div className={styles.smallText}>{props.smallText}</div>
        )}
        {props.footerText && (
          <div
            className={styles.footer}
            dangerouslySetInnerHTML={{ __html: props.footerText }}
          ></div>
        )}
      </div>
    </Wrapper>
  );
}
