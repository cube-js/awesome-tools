import dynamic from "next/dynamic";
import styles from "./index.module.scss";
const Popup = dynamic(() => import("../../components/Popup"));

export default function ComparisonPopup(props) {
  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose}>
      Hello!
    </Popup>
  );
}
