import styles from "./index.module.scss";
import cx from "classnames";

export default function Popup(props) {
  if (!props.isOpen) {
    return false
  }
  return (
    <div
      className={cx(styles.popup, "row")}
    >
      <div className={cx(styles.popupContentWrap, "col-10")}>
        <div className={styles.popupCloseButton} onClick={props.onClose}>
          &#10005;
        </div>
        <div className="col-10">{props.children}</div>
      </div>
    </div>
  );
}
