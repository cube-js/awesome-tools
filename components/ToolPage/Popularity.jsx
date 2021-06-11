import styles from "./Popularity.module.scss";
import Card from "../Card/Card";
import BigCard from "../Card/BigCard";
import H2 from "../Text/H2";
import moment from "moment";

export default function Popularity(props) {
  return (
    <div className={styles.popularity + " row"}>
      <div className="col-lg-3">
        <H2>
          Popularity
          <br />& Relevance
        </H2>
      </div>
      <div className={styles.bigCardWrap + " col-lg-3"}>
        <BigCard
          color="gray"
          icon="/images/logo/github-big.svg"
          text={props.github.stars}
          description="GitHub stars"
          footerText={`${props?.positions?.stars} of ${props?.positions?.total} place of all tools`}
        />
      </div>
      <div className={styles.bigCardWrap + " col-lg-3"}>
        <BigCard
          icon="/images/edit.svg"
          text={props.github.issues}
          description="Open issues"
          footerText={`${props?.percentages?.stale_issues?.toFixed(
            0
          )}&thinsp;% older than 1 year`}
        />
      </div>
      <div className={styles.smallCardWrap + " col-lg-3"}>
        <Card
          className="mb-md"
          color="gray"
          text={props.github.contributors}
          footerText="contributors"
        />
        <Card
          color="gray"
          text={
            moment(props?.github?.last_release?.date).format("MMM DD, YYYY") ||
            "-"
          }
          footerText="last release date"
        />
      </div>
    </div>
  );
}
