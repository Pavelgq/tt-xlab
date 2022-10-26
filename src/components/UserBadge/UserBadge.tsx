import styles from "./UserBadge.module.scss";
import { ReactComponent as AvatarIcon } from "../../assets/svg/avatar.svg";
//Заглушка
export const UserBadge = () => {
  return (
    <div className={styles.userBadge}>
      <AvatarIcon className={styles.avatar} />
      <span className={styles.name}>Имя Фамилия</span>
    </div>
  );
};
