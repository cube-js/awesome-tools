import styles from "./ToolCard.module.scss";
import { ReactSVG } from "react-svg";
import moment from "moment";

export default function ToolCard(props) {
  console.log(props);
  return (
    <div className={styles.toolCard} shadow={props.shadow}>
      <div className="flex flex-items-center">
        <img
          className={styles.toolCard__logo}
          src={props.logo || ""}
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
        className={styles.toolCard__description + " mt-md mb-lg"}
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></p>
      <div className="flex">
        <div className="flex flex-column">
          <span className={styles.features}>GitHub stars</span>
          <div className={styles.github}>
            <ReactSVG
              wrapper="span"
              className={styles.icon}
              src="/images/logo/github.svg"
            />
            <span className="features__text">
              {props?.github_data?.stars || "-"}
            </span>
          </div>
        </div>
        <div className="flex flex-column">
          <span className={styles.features}>Framework</span>
          <div className={styles.framework}>
            {props.frameworks &&
              props.frameworks.map((framework) => {
                return (
                  <div className={styles.framework__wrapper}>
                    {framework !== "Universal" ? (
                      <ReactSVG
                        wrapper="span"
                        className={styles.icon}
                        src={`/images/logo/${framework.toLowerCase()}.svg`}
                      />
                    ) : null}
                    <span className="features__text">{framework}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-column">
          <span className={styles.features}>Language</span>
          <div className={styles.language}>
            {props.languages &&
              props.languages.map((language) => {
                return (
                  <div className={styles.language__wrapper}>
                    {language ? (
                      <ReactSVG
                        wrapper="span"
                        className={styles.icon}
                        src={`/images/logo/${language.toLowerCase()}.svg`}
                      />
                    ) : null}
                    <span className="features__text">{language}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="flex flex-column">
          <span className={styles.features}>Last release</span>
          <div>
            <span className="features__text">
              {moment(props?.github_data?.last_release?.date).format(
                "MMM DD, YYYY"
              ) || "-"}
            </span>
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
