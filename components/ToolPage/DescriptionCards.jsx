import styles from "./DescriptionCards.module.scss";
import Card from "../Card/Card";

const getLicense = (props) => {
  let isOpen = false;
  let isPrice = false;
  let smallText = "";
  let icon = "/images/logo/dollar.svg";
  let link = props?.links?.pricing;

  props?.licenses?.forEach((obj) => {
    if (obj.type === "open-source") {
      isOpen = true;
      smallText = obj.title;
      link = obj.link;
      icon = "/images/logo/open-source-color.svg";
    } else {
      isPrice = true;
      smallText = "Priсe page →";
    }
  });

  if (isOpen && isPrice) {
    return {
      icons: ["/images/logo/dollar.svg", "/images/logo/open-source.svg"],
      text: "Open-source and Proprietary licenses",
      link: props?.links?.pricing || link,
      smallText: "Priсe page →",
    };
  }
  if (isOpen) {
    return {
      text: "Open-source license",
      smallText,
      link,
      icon,
    };
  }
  if (isPrice) {
    return {
      text: "Proprietary license",
      link,
      icon,
    };
  }
};

const getFrameworks = (props) => {
  let docsLinks = {
    "vanilla-js": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    react: "https://reactjs.org/docs/getting-started.html",
    vue: "https://vuejs.org/v2/guide/",
    angular: "https://angular.io/docs",
  };

  if (props?.frameworks?.length === 1) {
    let fr = props.frameworks[0];
    return {
      icon: `/images/logo/${fr.toLowerCase()}.svg`,
      text: `${capitalizeFirstLetter(fr)} Only`,
      link: docsLinks?.[fr.toLowerCase()],
      smallText: `Go to Docs →`,
    };
  }

  let frameworksOnly = props.frameworks.filter((fr) => fr !== "vanilla-js");

  return {
    text: frameworksOnly.map((s, index) => {
      return (
        <span key={s}>
          <a href={docsLinks[s]} target=" _blank" className="isHovered">
            {capitalizeFirstLetter(s)}
          </a>
          {index === frameworksOnly.length - 1 ? " " : ", "}
        </span>
      );
    }),
    // .join(", ")
    icons: props.frameworks.map((fr) => `/images/logo/${fr}.svg`),
    smallText: `Go to Docs`,
    notLink: true,
  };
};

const getLanguage = (languages) => {
  let hasTS = languages.includes("TypeScript");

  let icon = "/images/logo/javascript.svg";
  let text = "JavaScript only";
  let smallText = "No TypeScript support";
  let color = "orange";
  let link = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  if (hasTS) {
    icon = "/images/logo/typescript.svg";
    text = "TypeScript support";
    smallText = "DefinitelyTyped definitions";
    color = "gray";
    link = "https://www.typescriptlang.org/docs/";
  }
  return {
    icon,
    text,
    smallText,
    color,
    link,
  };
};

export default function DescriptionCards(props) {
  return (
    <div className={styles.descriptionCards + " row"}>
      {props.licenses && (
        <div className={styles.cardWrap + " col-xl-4 col-lg-4 col-md-12"}>
          <Card height="full" {...getLicense(props)} />
        </div>
      )}
      {props.frameworks && (
        <div className={styles.cardWrap + " col-xl-4 col-lg-4 col-md-12"}>
          <Card height="full" color="gray" {...getFrameworks(props)} />
        </div>
      )}
      {props.languages && (
        <div className={styles.cardWrap + " col-xl-4 col-lg-4 col-md-12"}>
          <Card height="full" {...getLanguage(props.languages)} />
        </div>
      )}
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
