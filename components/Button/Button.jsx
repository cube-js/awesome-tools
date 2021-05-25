import styles from "./Button.module.scss";
import { ReactSVG } from "react-svg";
import Link from "next/link";

export default function Chip(props) {
  return (
    <Link href={props.href}>
      <button
        type="button"
        className={
          props.className
            ? `${props.className} ${styles.button}`
            : styles.button
        }
      >
        <span>{props.children}</span>
      </button>
    </Link>
  );
}
