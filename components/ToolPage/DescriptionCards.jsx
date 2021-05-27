import styles from "./DescriptionCards.module.scss";
import Card from "../Card";

export default function DescriptionCards(props) {
  return (
    <div className={styles.descriptionCards + " row"}>
      <div className="col-md">
        <Card
          icon="/images/logo/dollar.svg"
          text="Proprietary license"
          link={{ text: "Priсe page →", href: props?.links?.pricing }}
        />
      </div>
      <div className="col-md">
        <Card
          color="gray"
          icon="/images/logo/react.svg"
          text="React Only"
          link={{ text: "Go to Docs →", href: props?.links?.docs }}
        />
      </div>
      <div className="col-md">
        <Card
          icon="/images/logo/typescript.svg"
          text="Not supported"
          description="TypeScript"
        />
      </div>
    </div>
  );
}
