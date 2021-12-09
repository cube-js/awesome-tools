import styles from "./Integrations.module.scss";
import Card from "../Card/Card";
import H2 from "../Text/H2";
import frameworks from '../../data/frameworks';

export default function Integrations(props) {
  const integrations = props.integrations || [ props.integration ]

  return (
    <div className={styles.integration + " row"}>
      <div className="col-lg-3">
        <H2>
          {props.integration ? frameworks[props.integration.framework].name : "Framework"} Support
        </H2>
      </div>
      <div className={styles.cards + " col-lg-9 row"}>
        {integrations.map(integration => {
          const framework = frameworks[integration.framework]
          const link = integration.links?.website
            ? integration.links.website
            : `https://github.com/${integration.slugs.github}`;

          return (
            <div className={styles.cardWrap + (props.integration ? " col-xl-12 col-lg-12 col-md-12" : " col-xl-6 col-lg-6 col-md-12")}>
              <Card
                key={integration.framework}
                link={link}
                icon={`/images/logo/${framework.icon}`}
                text={integration.slugs.npm}
                smallText={`${framework.name} components`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
