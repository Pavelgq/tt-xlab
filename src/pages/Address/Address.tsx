import { useState, ChangeEvent } from "react";
import { useQuery } from "react-query";
import { fetchAddress } from "../../api/address";
import { Paper } from "../../components/Paper/Paper";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchResult } from "../../components/SearchResult/SearchResult";
import styles from "./Address.module.scss";

export const Address = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const { isFetching, data, refetch } = useQuery(
    "addressData",
    () => fetchAddress(searchValue).then((res) => res.json()),
    { enabled: false }
  );

  const searchAddress = () => {
    if (searchValue.length >= 3) {
      refetch();
    }
  };

  return (
    <section className={styles.container}>
      <h2 className={"title"}>Поиск адресов</h2>
      <span className={styles.subTitle}>Введите интересующий вас адрес</span>
      <SearchBar
        className={styles.search}
        searchValue={searchValue}
        handleChange={handleChange}
        handleSearch={searchAddress}
      />
      {isFetching && (
        <Paper className={styles.result}>
          <span className={styles.subTitle}>Загрузка</span>
        </Paper>
      )}
      {data?.suggestions.length > 0 && !isFetching && (
        <Paper className={styles.result}>
          <>
            {!isFetching && (
              <>
                <h2 className={"title"}>Адреса</h2>
                <ul className={styles.list}>
                  {data?.suggestions.map((el: any) => (
                    <li className={styles.item} key={el.value}>
                      <SearchResult text={el.value} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        </Paper>
      )}
    </section>
  );
};
