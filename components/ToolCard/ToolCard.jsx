import styles from "./ToolCard.module.scss";
import { ReactSVG } from "react-svg";
import moment from "moment";
import Link from "next/link";
import abbreviateNumber from "../../utils/number";
// import React, { useEffect } from "react";

export default function ToolCard(props) {
  let shadow = getShadowByLabel(props?.feature_label);
  let language = null;
  if (props.languages && props.languages.length > 0) {
    language = props?.languages?.includes("TypeScript")
      ? "TypeScript"
      : "JavaScript";
  }

  // useEffect(() => {
  //   console.log("isMountComponent!");
  // }, []);

  return (
    <Link href={"/tools/" + props.id} className="full-height">
      <a className="full-height">
        <div className={styles.toolCard} shadow={shadow}>
          <div className="flex flex-items-center">
            <div
              className={styles.toolCard__logo}
              style={{ backgroundImage: `url(${props.logo})` }}
              alt={`${props.title} logo`}
            ></div>
            <div className="flex flex-column">
              <h4 className={styles.toolCard__title}>{props.title || ""}</h4>
              {props.developer && (
                <span className={styles.toolCard__developer}>
                  Developed by
                  <span>
                    <img
                      src={`/images/logo/${props.developer}`}
                      alt="tool developer logo"
                    ></img>
                  </span>
                </span>
              )}
            </div>
          </div>
          <p
            className={styles.toolCard__description}
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></p>
          <div className="flex flex-wrap-row">
            <div className="flex flex-column">
              <span className={styles.features}>GitHub stars</span>
              <div className={styles.github}>
                <ReactSVG
                  wrapper="span"
                  className={styles.icon}
                  src="/images/logo/github.svg"
                />
                <span className={styles.features__text}>
                  {abbreviateNumber(props?.github_data?.stars) || "-"}
                </span>
              </div>
            </div>

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
                            <ReactSVG
                              wrapper="span"
                              className={styles.icon}
                              src={`/images/logo/${framework.toLowerCase()}.svg`}
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
                      <ReactSVG
                        wrapper="span"
                        className={styles.icon}
                        src={`/images/logo/${language.toLowerCase()}.svg`}
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
                    {moment(props?.github_data?.last_release?.date).format(
                      "MMM DD, YYYY"
                    ) || "-"}
                  </span>
                </div>
              </div>
            )}
          </div>
          {props.feature_label && (
            <div className={styles.toolCard__achievement}>
              <ReactSVG
                wrapper="span"
                src={`/images/${props.feature_label}.svg`}
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
