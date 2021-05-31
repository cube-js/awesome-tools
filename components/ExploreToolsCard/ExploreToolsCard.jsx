import styles from "./ExploreToolsCard.module.scss";
import { ReactSVG } from "react-svg";

export default function ExproreToolsCard(props) {
  return (
    <div className="col-md-6 col-xl-4 col-xxl-2" onClick={props.onClick}>
      <div className={styles.exploreToolsCard}>
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
    </div>
  );
}
