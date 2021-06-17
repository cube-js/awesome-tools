import styles from "./ExploreToolsCard.module.scss";
import { ReactSVG } from "react-svg";

export default function ExproreToolsCard(props) {
  return (
    <a
      className="col-6 col-md-6 col-lg-4 col-xl-2"
      onClick={props.onClick}
      // href="#"
      role="button"
    >
      <div className={styles.exploreToolsCard} active={props.active || null}>
        <div className={styles.exploreToolsCard__wrap}>
          <span
            className={styles.exploreToolsCard__text}
            dangerouslySetInnerHTML={{ __html: props.text }}
          ></span>
        </div>
        {props.image && (
          <ReactSVG
            wrapper="span"
            src={`/images/${props.image}.svg`}
            className={styles.exploreToolsCard__image}
          />
        )}
      </div>
    </a>
  );
}
