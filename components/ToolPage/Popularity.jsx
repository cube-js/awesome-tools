import styles from "./Popularity.module.scss";
import Card from "../Card/Card";
import BigCard from "../Card/BigCard";
import H2 from "../Text/H2";
import moment from "moment";

export default function Popularity(props) {
  return (
    <div className={styles.popularity + " row"}>
      <div className="col-sm-3">
        <H2>
          Popularity
          <br />& Relevance
        </H2>
      </div>
      <div className="col-sm-3">
        <BigCard
          color="gray"
          icon="/images/logo/github-big.svg"
          text={props.github.stars}
          description="GitHub stars"
          footerText="2 of 41 place of all tools"
        />
      </div>
      <div className="col-sm-3">
        <BigCard
          icon="/images/edit.svg"
          text={props.github.issues}
          description="Open issues"
          footerText={`${(
            (props.github.stale_issues / props.github.issues) *
            100
          ).toFixed(1)}% older than 1 year`}
        />
      </div>
      <div className={"col-sm-3"}>
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
