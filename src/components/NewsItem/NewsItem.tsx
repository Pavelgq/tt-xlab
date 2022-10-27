import Linkify from "react-linkify";
import styles from "./NewsItem.module.scss";
import { NewsItemProps } from "./NewsItem.props";

export const NewsItem = ({ title, value }: NewsItemProps) => {
  return (
    <Linkify>
      <h4 className={styles.subtitle}>{title}</h4>
      <p className={styles.text}>{value}</p>
    </Linkify>
  );
};
