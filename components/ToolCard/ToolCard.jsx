import styles from "./ToolCard.module.scss";
import dayjs from "dayjs";
import Link from "next/link";
import abbreviateNumber from "../../utils/number";

export default function ToolCard(props) {
  let shadow = getShadowByLabel(props?.feature_label);
  let language = null;
  if (props.languages && props.languages.length > 0) {
    language = props?.languages?.includes("TypeScript")
      ? "TypeScript"
      : "JavaScript";
  }

  return (
    <Link href={"/tools/" + props.id} className="full-height" legacyBehavior>
      <a className="full-height">
        <div className={styles.toolCard} shadow={shadow}>
          <div className="flex flex-items-center">
            <img
              className={styles.toolCard__logo}
              src={`/images/logo/${props.logo}`}
              alt={`${props.title} logo`}
            />
            <div className="flex flex-column">
              <h2 className={styles.toolCard__title}>
                {props.title || ""}
                {props.developer && (
                  <span className={styles.toolCard__developer}>
                    &nbsp;by&nbsp;{props.developer}
                  </span>
                )}
              </h2>
            </div>
          </div>
          <p
            className={styles.toolCard__description}
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
          <div className="flex flex-wrap-row">
            {props?.github_data && (
              <div className="flex flex-column">
                <span className={styles.features}>GitHub stars</span>
                <div className={styles.github}>
                  <img
                    className={styles.icon}
                    src={`/images/logo/github.svg`}
                    alt={`${props.title} logo`}
                  />
                  <span className={styles.features__text}>
                    {abbreviateNumber(props?.github_data?.stars) || "-"}
                  </span>
                </div>
              </div>
            )}

            {props.frameworks && props.frameworks.length > 0 && (
              <div className="flex flex-column">
                <span className={styles.features}>Framework</span>
                <div className={styles.framework}>
                  {props.frameworks &&
                    props.frameworks.map((framework) => {
                      return (
                        <div
                          className={styles.framework__wrapper}
                          key={framework + Math.random()}
                        >
                          {framework !== "Universal" ? (
                            <img
                              className={styles.icon}
                              src={`/images/logo/${framework.toLowerCase()}.svg`}
                              alt={`${props.title} logo`}
                            />
                          ) : null}
                          {props.frameworks.length === 1 && (
                            <span className={styles.features__text}>
                              {framework === "vanilla-js"
                                ? "vanilla JS"
                                : framework}
                            </span>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {language && (
              <div className="flex flex-column">
                <span className={styles.features}>Language</span>
                <div className={styles.language}>
                  <div className={styles.language__wrapper}>
                    {language ? (
                      <img
                        className={styles.icon}
                        src={`/images/logo/${language.toLowerCase()}.svg`}
                        alt={`${props.title} logo`}
                      />
                    ) : null}
                    <span className={styles.features__text}>{language}</span>
                  </div>
                </div>
              </div>
            )}

            {props?.github_data?.last_release?.date && (
              <div className="flex flex-column">
                <span className={styles.features}>Last release</span>
                <div>
                  <span className={styles.features__text}>
                    {dayjs(props?.github_data?.last_release?.date).format(
                      "MMM DD, YYYY"
                    ) || "-"}
                  </span>
                </div>
              </div>
            )}
          </div>
          {props.feature_label && (
            <div className={styles.toolCard__achievement}>
              <img
                className={styles.toolCard__achievement__icon}
                src={`/images/${props.feature_label}.svg`}
                alt={`${props.title} logo`}
              />
            </div>
          )}
        </div>
      </a>
    </Link>
  );
}

function getShadowByLabel(label) {
  if (!label) {
    return "gray";
  }

  return label;
}
