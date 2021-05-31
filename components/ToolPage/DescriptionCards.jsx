import styles from "./DescriptionCards.module.scss";
import Card from "../Card/Card";

const getLicense = (props) => {
  let isOpen = false;
  let isPrice = false;
  let description = "";

  props.licenses.forEach((obj) => {
    if (obj.type === "open-source") {
      isOpen = "Open-source";
      description = obj.title;
    } else {
      isPrice = "Proprietary";
    }
  });

  if (isOpen && isPrice) {
    return {
      text: "Open-source and Proprietary licenses",
      link: { text: "Priсe page →", href: props?.links?.pricing },
    };
  }
  if (isOpen) {
    return {
      text: "Open-source license",
      description,
    };
  }
  if (isPrice) {
    return {
      text: "Proprietary license",
      link: { text: "Priсe page →", href: props?.links?.pricing },
    };
  }
};

const getFrameworks = (props) => {
  let isReact = false;
  let isVue = false;
  let isAngular = false;

  props.frameworks.forEach((framework) => {
    if (framework === "react") {
      isReact = true;
    }
    if (framework === "vue") {
      isVue = true;
    }
    if (framework === "angular") {
      isAngular = true;
    }
  });

  if (isReact && !isVue && !isAngular) {
    return {
      icon: "/images/logo/react.svg",
      text: "React Only",
      link: {
        text: "Go to Docs →",
        href: "https://reactjs.org/docs/getting-started.html",
      },
    };
  }
  if (!isReact && isVue && !isAngular) {
    return {
      icon: "/images/logo/vue.svg",
      text: "Vue Only",
      link: {
        text: "Go to Docs →",
        href: "https://vuejs.org/v2/guide/",
      },
    };
  }
  if (!isReact && !isVue && isAngular) {
    return {
      icon: "/images/logo/angular.svg",
      text: "Angular Only",
      link: {
        text: "Go to Docs →",
        href: "https://angular.io/docs",
      },
    };
  }

  return {
    text: "Supported",
    icons: props.frameworks.map((fr) => `/images/logo/${fr}.svg`),
    description: `${props.frameworks.join(", ")}`,
  };
};

export default function DescriptionCards(props) {
  return (
    <div className={styles.descriptionCards + " row"}>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <Card icon="/images/logo/dollar.svg" {...getLicense(props)} />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <Card color="gray" {...getFrameworks(props)} />
      </div>
      <div className="col-xl-4 col-lg-6 col-md-12">
        <Card
          icon="/images/logo/typescript.svg"
          text={
            props.languages.includes("TypeScript")
              ? "Supported"
              : "Not supported"
          }
          description="TypeScript"
        />
      </div>
    </div>
  );
}
