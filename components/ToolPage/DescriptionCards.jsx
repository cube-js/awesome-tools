import styles from "./DescriptionCards.module.scss";
import Card from "../Card/Card";

const getLicense = (props) => {
  let isOpen = false;
  let isPrice = false;
  let smallText = "";
  let icon = "/images/logo/proprietary.svg";
  let link = props?.links?.pricing;

  props?.licenses?.forEach((obj) => {
    if (obj.type === "open-source") {
      isOpen = true;
      smallText = obj.title;
      link = obj.link;
      icon = "/images/logo/open-source.svg";
    } else {
      isPrice = true;
      link = obj.link;
    }
  });

  if (isOpen && isPrice) {
    return {
      icons: ["/images/logo/proprietary.svg", "/images/logo/open-source.svg"],
      text: "Open-source and proprietary licenses",
      link: props?.links?.pricing || link,
      smallText: props?.links?.pricing ? "Priсing page →" : "License →",
    };
  }
  if (isOpen) {
    return {
      text: "Open-source license",
      smallText: `${smallText} →`,
      link,
      icon,
    };
  }
  if (isPrice) {
    return {
      text: "Proprietary license",
      link: props?.links?.pricing || link,
      smallText: props?.links?.pricing ? "Priсing page →" : "License →",
      icon,
    };
  }
};

const getFrameworks = (props) => {
  if (props?.frameworks?.length === 1) {
    let fr = props.frameworks[0];
    return {
      icon: `/images/logo/${fr.toLowerCase()}.svg`,
      text: `${fr === 'vanilla-js' ? 'Vanilla JS' : capitalizeFirstLetter(fr)} only`,
      link: `https://github.com/${props.slugs.github}`,
      smallText: `GitHub repository →`,
    };
  }

  let frameworksOnly = props.frameworks.filter((fr) => fr !== "vanilla-js");

  return {
    text: frameworksOnly.map((s, index) => {
      return (
        <span key={s}>
          {capitalizeFirstLetter(s)}
          {index === frameworksOnly.length - 1 ? " " : ", "}
        </span>
      );
    }),
    icons: props.frameworks.map((fr) => `/images/logo/${fr}.svg`),
    smallText: `GitHub repository →`,
    link: `https://github.com/${props.slugs.github}`,
  };
};

const getLanguage = (languages, slugs) => {
  let hasTS = languages.includes("TypeScript");
  let hasDT = slugs.npm_types !== undefined

  let icon = "/images/logo/javascript.svg";
  let text = "JavaScript only";
  let smallText = "No TypeScript support";
  let color = "orange";
  let link = undefined;

  if (hasTS) {
    icon = "/images/logo/typescript.svg";
    text = "TypeScript support";
    smallText = hasDT ? "DefinitelyTyped definitions →" : "*.d.ts files →";
    color = "gray";
    link = hasDT ? `https://www.npmjs.com/package/${slugs.npm_types}` : `https://github.com/search?q=repo%3A${encodeURIComponent(slugs.github)}+filename%3A.d.ts&type=Code`;
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
          <Card height="full" {...getLanguage(props.languages, props.slugs)} />
        </div>
      )}
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
