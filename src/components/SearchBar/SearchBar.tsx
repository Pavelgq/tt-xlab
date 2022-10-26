import cn from "classnames";
import { SearchBarProps } from "./SearchBar.props";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./SearchBar.module.scss";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

export const SearchBar = ({ className = "" }: SearchBarProps) => {
  return (
    <div className={cn(styles.searchBar, className)}>
      <Input
        className={styles.input}
        placeholder="Введите интересующий вас адрес"
      />
      <Button className={""}>
        <SearchIcon style={{ width: 32, height: 32 }} />
        <span>Поиск</span>
      </Button>
    </div>
  );
};
