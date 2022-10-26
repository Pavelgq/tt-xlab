import cn from "classnames";
import { Paper } from "../../components/Paper/Paper";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Address.module.scss";

export const Address = () => {
  return (
    <section className={styles.container}>
      <h2 className={"title"}>Поиск адресов</h2>
      <span className={styles.subTitle}>Введите интересующий вас адрес</span>
      <SearchBar className={styles.search} />

      <Paper className={styles.result}>
        <h2 className={styles.title}>Адреса</h2>
        {/* <SearchResult /> */}
      </Paper>
    </section>
  );
};
