import styles from "./News.module.scss";
import NewsCard from "../NewsCard";
import H2 from "../Text/H2";

export default function Description(props) {
  return (
    <div className={styles.news + " row"}>
      <div className="col-sm-3">
        <H2>News</H2>
        <div className="mt-sm">
          <a href="/" className="link" target="_blank">
            Read more →
          </a>
        </div>
      </div>
      <div className="col-sm-9">
        {props.news.map((n) => (
          <NewsCard {...n} />
        ))}
      </div>
    </div>
  );
}
