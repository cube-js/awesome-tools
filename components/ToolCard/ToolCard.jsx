import styles from "./ToolCard.module.scss";
import API from "../../api";

export default function ToolCard(props) {
  return (
    <div className={styles.toolCard} shadow={props.shadow}>
      <div className="flex flex-items-center">
        <img
          className={styles.toolCard__logo}
          src={props.src || ""}
          alt={props.title || ""}
        />
        <div className="flex flex-column">
          <h4 className={styles.toolCard__title}>{props.title || ""}</h4>
          {props.developer && (
            <span className={styles.toolCard__developer}>
              Developed by
              <img
                src={`/images/logo/${props.developer}.svg`}
                alt={`developed by ${props.developer}`}
              ></img>
            </span>
          )}
        </div>
      </div>
      <p
        className={styles.toolCard__description + " mt-sm mb-lg"}
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></p>
      <div className="flex">
        <div className="flex flex-column">
          <span className={styles.features}>GitHub stars</span>
          <div className={styles.github}>
            <img src="/images/logo/github.svg" alt="github icon" />
            <span className="features__text">
              {API.getGitHubStarsByLink(props.link)}
            </span>
          </div>
        </div>
        <div className="flex flex-column">
          <span className={styles.features}>Framework</span>
          <div className={styles.framework}>
            {props.framework && props.framework !== "Universal" ? (
              <img
                src={`/images/logo/${props.framework.toLowerCase()}.svg`}
                alt={`${props.framework} icon`}
              />
            ) : null}
            {/* <img src="/images/logo/github.svg" alt="github icon" /> */}
            <span className="features__text">{props.framework}</span>
          </div>
        </div>
        <div className="flex flex-column">
          <span className={styles.features}>Language</span>
          <div className={styles.language}>
            {props.language ? (
              <img
                src={`/images/logo/${props.language.toLowerCase()}.svg`}
                alt={`${props.language} icon`}
              />
            ) : null}
            <span className="features__text">{props.language}</span>
          </div>
        </div>
        <div className="flex flex-column">
          <span className={styles.features}>Last release</span>
          <div>
            <span className="features__text">{API.getLastReleaseByLink()}</span>
          </div>
        </div>
      </div>
      {props.label && (
        <div className={styles.toolCard__label}>
          <img src={`/images/${props.label}.svg`} alt={props.label} />
        </div>
      )}
    </div>
  );
}
