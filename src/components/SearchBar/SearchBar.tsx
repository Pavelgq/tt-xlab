import { FormEvent } from "react";
import cn from "classnames";
import { SearchBarProps } from "./SearchBar.props";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

export const SearchBar = ({
  className = "",
  searchValue,
  handleChange,
  handleSearch,
}: SearchBarProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSearch();
  };
  return (
    <form className={cn(styles.searchBar, className)} onSubmit={handleSubmit}>
      <Input
        className={styles.input}
        placeholder="Введите интересующий вас адрес"
        value={searchValue}
        onChange={handleChange}
      />
      <Button type={"submit"}>
        <SearchIcon style={{ width: 32, height: 32 }} />
        <span>Поиск</span>
      </Button>
    </form>
  );
};
