import styles from "./ExploreToolsCard.module.scss";
import { ReactSVG } from "react-svg";

export default function ExproreToolsCard(props) {
  return (
    <div className={styles.exploreToolsCard} onClick={props.onClick}>
      <span
        className={styles.exploreToolsCard__text}
        dangerouslySetInnerHTML={{ __html: props.text }}
      ></span>
      {props.image && (
        <ReactSVG
          // wrapper="span"
          src={`/images/${props.image}.svg`}
          className={styles.exploreToolsCard__image}
        />
      )}
    </div>
  );
}
