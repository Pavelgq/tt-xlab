import cn from "classnames";
import styles from "./SearchResult.module.scss";
import { SearchResultProps } from "./SearchResult.props";

export const SearchResult = ({ text, className = "" }: SearchResultProps) => {
  return <span className={cn(styles.text, className)}>{text}</span>;
};
