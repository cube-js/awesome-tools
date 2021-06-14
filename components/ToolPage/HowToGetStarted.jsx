import styles from "./HowToGetStarted.module.scss";
import GetStartedCard from "../GetStartedCard";
import H2 from "../Text/H2";

export default function HowToGetStarted(props) {
  return (
    <div className={styles.HowToGetStarted + " row"}>
      <div className="col-sm-3">
        <H2>Getting started</H2>
      </div>
      {props.content.map((obj, index) => {
        const icon =
          obj.type === "official"
            ? "/images/logo/official.svg"
            : "/images/logo/cubejs-big.svg";
        return (
          <div key={index} className={index === 0 ? "col-sm-5" : "col-sm-4"}>
            <GetStartedCard
              icon={icon}
              type={obj.type === "official" ? "TUTORIALS" : "Installation"}
              title={obj.title}
              link={obj.link}
            />
          </div>
        );
      })}

      {/* <div className="col-sm-4">
        <GetStartedCard />
      </div> */}
    </div>
  );
}
