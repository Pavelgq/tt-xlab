import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { UserBadge } from "../UserBadge/UserBadge";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <LogoIcon />
        <h1 className={styles.title}>Wrench CRM</h1>
      </div>
      <UserBadge />
    </header>
  );
};
