import styles from "./News.module.scss";
import NewsCard from "../NewsCard";
import H2 from "../Text/H2";

export default function Description(props) {
  return (
    <div className={styles.news + " row"}>
      <div className="col-sm-3">
        <H2>News</H2>
        <div className="mt-sm">
          <a href={props.link} className="link" target="_blank">
            Read more →
          </a>
        </div>
      </div>
      <div className={styles.newsCardsWrap + " col-sm-9"}>
        {props.news.map((n, index) => (
          <NewsCard key={n.user + index} {...n} />
        ))}
      </div>
    </div>
  );
}
