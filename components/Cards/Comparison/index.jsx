import styles from "./index.module.scss";
import cx from "classnames";

export default function ComparisonCard(props) {
  return (
    <a href={props.link} target="_blank">
      <div
        className={cx({
          [styles.card]: true,
          [props.className]: props.className,
        })}
      >
        {props.children}
      </div>
    </a>
  );
}
