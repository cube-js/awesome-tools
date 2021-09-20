import styles from "./Button.module.scss";
import Link from "next/link";
import cx from 'classnames'

export default function Button(props) {
  return (
    <Link href={props.href || "#"}>
      <a
        type="button"
        role="button"
        {...props}
        className={cx({
          [styles.button]: true,
          [props.className]: props.className,
          [styles.special]: props.special
        })}
      >
        <span>{props.children}</span>
      </a>
    </Link>
  );
}
