import { NewsItem } from "../../components/NewsItem/NewsItem";
import styles from "./News.module.scss";
import { newsItems } from "./NewsData";

export const News = () => {
  return (
    <section className={styles.container}>
      <h2 className="title">Новости</h2>
      {newsItems.length > 0 &&
        newsItems.map((item) => (
          <NewsItem key={item.title} title={item.title} value={item.value} />
        ))}
    </section>
  );
};
