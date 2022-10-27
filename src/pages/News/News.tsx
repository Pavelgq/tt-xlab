import Linkify from "react-linkify";
import styles from "./News.module.scss";
import { newsItems } from "./NewsData";

export const News = () => {
  return (
    <section className={styles.container}>
      <h2 className="title">Новости</h2>
      {newsItems.length > 0 &&
        newsItems.map((item) => (
          <Linkify key={item.title}>
            <h4 className={styles.subtitle}>{item.title}</h4>
            <p className={styles.text}>{item.value}</p>
          </Linkify>
        ))}
    </section>
  );
};
