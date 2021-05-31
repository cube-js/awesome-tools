import styles from "./DescriptionCards.module.scss";
import Card from "../Card/Card";

export default function DescriptionCards(props) {
  return (
    <div className={styles.descriptionCards + " row"}>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <Card
          icon="/images/logo/dollar.svg"
          text="Proprietary license"
          link={{ text: "Priсe page →", href: props?.links?.pricing }}
        />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <Card
          color="gray"
          icon="/images/logo/react.svg"
          text="React Only"
          link={{ text: "Go to Docs →", href: props?.links?.docs }}
        />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <Card
          icon="/images/logo/typescript.svg"
          text="Not supported"
          description="TypeScript"
        />
      </div>
    </div>
  );
}
