import styles from "./HowToGetHelp.module.scss";
import GetHelpCard from "../GetHelpCard";
import H2 from "../Text/H2";

export default function HowToGetStarted(props) {
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
      footer: `${props?.stackoverflow_data?.questions_count} questions ${props?.positions?.stars} of ${props?.positions?.total} place of all tools`,
    },
    {
      href: "https://slack.cube.dev/",
      title: "Cube.js Stack →",
      icon: "/images/logo/slack-big.svg",
      footer: `${props.slackMembers} followers`,
    },
  ];
  return (
    <div className={styles.HowToGetHelp}>
      <div className="row mb-md">
        <div className={styles.textWrap + " col-lg-3"}>
          <H2>How to get help</H2>
        </div>
        {cards.map((card, index) => {
          let className = " col-lg-5";
          if (index % 3 === 0) {
            className = " col-lg-5 offset-lg-3";
          }
          if (index % 2 === 0) {
            className = " col-lg-4";
          }
          return card.href ? (
            <div className={styles.cardWrap + className}>
              <GetHelpCard {...card} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
