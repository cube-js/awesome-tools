import styles from "./HowToGetHelp.module.scss";
import GetHelpCard from "../GetHelpCard";
import H2 from "../Text/H2";
import abbreviateNumber from "../../utils/number";

export default function HowToGetHelp(props) {
  const cards = [
    {
      href: props.links.slack,
      title: `${props.name} Slack →`,
      icon: "/images/logo/slack-big.svg",
    },
    {
      href: props.links.docs,
      title: `${props.name} docs →`,
      icon: props.logo,
    },
    {
      href: props.stackoverflow,
      title: "Stack Overflow →",
      icon: "/images/logo/stackoverflow-64.svg",
      footer: `${abbreviateNumber(
        props?.stackoverflow_data?.questions_count
      )} questions`,
    },
    {
      href: "https://slack.cube.dev/",
      title: "Cube Slack →",
      icon: "/images/logo/slack-big.svg",
      footer: `${abbreviateNumber(props.slackMembers)} followers`,
    },
  ];
  return (
    <div className={styles.HowToGetHelp}>
      <div className="row mb-md">
        <div className={styles.textWrap + " col-lg-3"}>
          <H2>
            How to
            <br />Get Help
          </H2>
        </div>
        {cards
          .filter((card) => card.href)
          .map((card, index) => {
            let className = " col-lg-4";
            // if (index === 0) {
            //   className = "col-lg-4";
            // }
            if (index === 1) {
              className = " col-lg-5";
            }
            if (index === 2) {
              className = " col-lg-5 offset-lg-3";
            }
            // let className = " col-lg-5";
            // if (index % 2 === 0 && index !== 0) {
            //   className = " col-lg-5 offset-lg-3";
            // }
            // if (index % 2 !== 0) {
            //   className = " col-lg-4";
            // }
            return card.href ? (
              <div
                key={card.title + Math.random()}
                className={styles.cardWrap + className}
              >
                <GetHelpCard {...card} />
              </div>
            ) : null;
          })}
      </div>
    </div>
  );
}
