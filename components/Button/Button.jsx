import styles from "./Button.module.scss";
import Link from "next/link";
import cx from 'classnames'

export default function Button(props) {
  return (
    <Link href={props.href || "#"}>
      <a
        type="button"
        role="button"
        disabled={props.disabled}
        {...props}
        className={cx({
          [styles.button]: true,
          [props.className]: props.className,
          [styles.special]: props.special,
          [styles.disabled]: props.disabled,
        })}
      >
        <span>{props.children}</span>
      </a>
    </Link>
  );
}
