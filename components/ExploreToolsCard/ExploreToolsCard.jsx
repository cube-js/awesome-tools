import styles from "./ExploreToolsCard.module.scss";
import { ReactSVG } from "react-svg";

export default function ExploreToolsCard(props) {
  return (
    <a
      className="col-6 col-md-6 col-lg-4 col-xl-2"
      onClick={props.onClick}
      role="button"
    >
      <div className={styles.exploreToolsCard} active={props.active || null}>
        <div className={styles.exploreToolsCard__wrap}>
          <h2
            className={styles.exploreToolsCard__text}
            dangerouslySetInnerHTML={{ __html: props.text.replace(' ', '<br/>') }}
          ></h2>
        </div>
        {props.image && (
          <ReactSVG
            wrapper="span"
            src={`/images/${props.image}`}
            className={styles.exploreToolsCard__image}
          />
        )}
      </div>
    </a>
  );
}
