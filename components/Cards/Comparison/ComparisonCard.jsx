import styles from "./index.module.scss";
import cx from "classnames";

const defaultText = (
  <span>
    Сompare <br /> оther tool
  </span>
);
const toolsNames = (tools) => {
  return (
    <span>
      {tools?.[0]?.title || ''} &<br /> {tools?.[1]?.title || ''}
    </span>
  );
};

const toolsImages = (tools) => {
  return (
    <div className={styles.logoWrap}>
      <div
        className={cx(styles.logo, styles.firstLogo, {
          [styles.empty]: !tools,
        })}
        style={{ backgroundImage: `url(${tools?.[0]?.logo || null})` }}
        alt={`${tools?.[0]?.title || "empty"} logo`}
      ></div>
      <img className={styles.vs} src="/images/vs_logo.svg" />
      <div
        className={cx(styles.logo, styles.secondLogo, {
          [styles.empty]: !tools,
        })}
        style={{ backgroundImage: `url(${tools?.[1]?.logo || null})` }}
        alt={`${tools?.[0]?.title || "empty"} logo`}
      ></div>
    </div>
  );
}

export default function ComparisonCard(props) {
  const {tools, onClick} = props;
  const isOther = !tools;
  const link = !isOther ? `${tools[0].id}-vs-${tools[1].id}` : null;

  return (
    <a href={link} onClick={onClick} target="_blank">
      <div
        className={cx({
          [styles.card]: true,
          [props.className]: props.className,
        })}
      >
        {toolsImages(tools)}
        <div className={styles.cardText}>
          {isOther ? defaultText : toolsNames(tools)}
        </div>
      </div>
    </a>
  );
}
