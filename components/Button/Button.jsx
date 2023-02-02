import styles from "./Button.module.scss";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.href} legacyBehavior>
      <a
        type="button"
        role="button"
        {...props}
        className={
          props.className
            ? `${props.className} ${styles.button}`
            : styles.button
        }
      >
        <span>{props.children}</span>
      </a>
    </Link>
  );
}
