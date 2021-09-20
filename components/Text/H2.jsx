import styles from "./H2.module.scss";
import cx from "classnames";

export default function H2(props) {
  return (
    <h2
      {...props}
      className={cx({
        [styles.h2]: true,
        [props.className]: props.className,
      })}
    >
      {props.children}
    </h2>
  );
}
