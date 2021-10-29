import styles from "./H1.module.scss";
import cx from "classnames";

export default function H1(props) {
  const {tag} = props
  const classNames = {
    [styles.title]: true,
    [props.className]: props.className,
  }
  if (tag === 'h2') {
    return <h2 className={cx(classNames)}>{props.children}</h2>;
  }
  return <h1 className={cx(classNames)}>{props.children}</h1>;
}
