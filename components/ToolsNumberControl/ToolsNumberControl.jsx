import styles from "./ToolsNumberControl.module.scss";
import { ReactSVG } from "react-svg";
export default function ToolsNumberControl(props) {
  let text = "awesome tools — and counting!";
  if (props.isChanged) {
    text = props.filteredTools.length === 1
      ? "awesome tool matching your criteria"
      : "awesome tools matching your criteria";
  }
  return (
    <div className={styles.toolsControl}>
      <div className={styles.toolsControl__text}>
        {props.filteredTools.length}&nbsp;{text}
      </div>
      {props.isChanged !== 0 && (
        <button
          className={styles.toolsControl__button}
          role="button"
          onClick={props.clearFilters}
        >
          <span>Clear filter</span>
          <ReactSVG
            wrapper="span"
            className={styles.clear}
            src="/images/clear.svg"
          />
        </button>
      )}
    </div>
  );
}
