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
          isLink={props?.slugs?.github}
          link={`https://github.com/${props?.slugs?.github}/stargazers`}
          color="gray"
          icon="/images/logo/github-big.svg"
          text={props?.github?.stars}
          description="GitHub stars"
          footerText={`${props?.positions?.stars} of ${props?.positions?.total} place of all tools`}
        />
      </div>
      <div className={styles.bigCardWrap + " col-lg-3"}>
        <BigCard
          color={props?.percentages?.stale_issues > 50 ? null : "gray"}
          isLink={props?.slugs?.github}
          link={`https://github.com/${props?.slugs?.github}/issues`}
          icon="/images/edit.svg"
          text={props?.github?.issues}
          description="open issues"
          footerText={`${props?.percentages?.stale_issues?.toFixed(
            0
          )}&thinsp;% older than 1 year`}
        />
      </div>
      <div className={styles.smallCardWrap + " col-lg-3"}>
        <Card
          isLink={props?.slugs?.github}
          link={`https://github.com/${props?.slugs?.github}/graphs/contributors`}
          className="mb-md"
          color="gray"
          text={props?.github?.contributors}
          footerText="contributors"
        />
        <Card
          isLink={props?.github?.last_release?.link}
          link={props?.github?.last_release?.link}
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
