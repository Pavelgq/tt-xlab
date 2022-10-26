import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./News.module.scss";
import { newsItems } from "./NewsData";

export const News = () => {
  return (
    <section className={styles.container}>
      <h2 className="title">Новости</h2>
      {newsItems.length > 0 &&
        newsItems.map((item) => (
          <div key={item.title} className={styles.news}>
            <h4 className={styles.subtitle}>{item.title}</h4>
            <p className={styles.text}>{item.value}</p>
          </div>
        ))}
    </section>
  );
};
