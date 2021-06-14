import styles from "./BigCard.module.scss";
import { ReactSVG } from "react-svg";

export default function Card(props) {
  let Wrapper = "div";
  if (props.isLink) {
    Wrapper = "a";
  }
  return (
    <Wrapper
      href={props.isLink && props?.link}
      target={props.isLink ? "_blank" : null}
    >
      <div
        color={props.color ? props.color : null}
        className={
          props.className ? styles.card + " " + props.className : styles.card
        }
      >
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
        {props.link && (
          <div className={styles.link}>
            <a target="_blank" href={props.link.href}>
              {props.link.text}
            </a>
          </div>
        )}
        {props.footerText && (
          <div
            className={styles.footer}
            dangerouslySetInnerHTML={{ __html: props.footerText }}
          >
            {/* {props.footerText} */}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
