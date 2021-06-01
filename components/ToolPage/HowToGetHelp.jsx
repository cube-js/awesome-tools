import styles from "./HowToGetHelp.module.scss";
import GetHelpCard from "../GetHelpCard";
import H2 from "../Text/H2";

export default function HowToGetStarted(props) {
  return (
    <div className={styles.HowToGetHelp}>
      <div className="row mb-md">
        <div className="col-sm-3">
          <H2>How to get help</H2>
        </div>
        {props.links.slack && (
          <div className="col-sm-4">
            <GetHelpCard
              title={`${props.name} Slack →`}
              footer="2,1K followers"
              icon="/images/logo/slack-big.svg"
              href={props.links.slack}
            />
          </div>
        )}
        {props.links.docs && (
          <div className="col-sm-5">
            <GetHelpCard
              title={`${props.name} docs →`}
              icon={props.logo}
              href={props.links.docs}
            />
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        {props.stackoverflow && (
          <div className="col-sm-5">
            <GetHelpCard
              title="Stack Overflow →"
              footer={`? questions ${props?.positions?.stars} of ${props?.positions?.total} place of all tools`}
              icon="/images/logo/stackoverflow-64.svg"
              href={props.stackoverflow}
            />
          </div>
        )}
        <div className="col-sm-4">
          <GetHelpCard
            title="Cube.js Stack →"
            footer={`${props.slackMembers} followers`}
            icon="/images/logo/slack-big.svg"
            href="https://slack.cube.dev/"
          />
        </div>
      </div>
    </div>
  );
}
