import styles from "./ExploreToolsCard.module.scss";
import { ReactSVG } from "react-svg";

export default function ExproreToolsCard(props) {
  return (
    <a
      className="col-6 col-md-6 col-xl-4 col-xxl-2"
      onClick={props.onClick}
      // href="#"
      role="button"
    >
      <div className={styles.exploreToolsCard} active={props.active || null}>
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
    </a>
  );
}
