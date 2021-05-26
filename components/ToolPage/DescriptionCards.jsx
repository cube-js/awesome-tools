import styles from "./DescriptionCards.module.scss";
import Card from "../Card";

export default function DescriptionCards(props) {
  return (
    <div className={styles.descriptionCards + " row"}>
      <div className="col-md">
        <Card
          icon="/images/logo/dollar.svg"
          text="Proprietary license"
          link={{ text: "Priсe page →", href: "/" }}
        />
      </div>
      <div className="col-md">
        <Card
          color="gray"
          icon="/images/logo/react.svg"
          text="React Only"
          link={{ text: "Go to GitHub →", href: "/" }}
        />
      </div>
      <div className="col-md">
        <Card
          icon="/images/logo/typescript.svg"
          text="React Only"
          description="TypeScript"
        />
      </div>
    </div>
  );
}
