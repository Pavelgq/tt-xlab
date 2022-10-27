import cn from "classnames";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { UserBadge } from "../UserBadge/UserBadge";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

export const Header = ({ open, toggleMenu }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <button
          className={cn(styles.hamburger, {
            [styles.close]: open,
          })}
          type="button"
          onClick={() => toggleMenu(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <LogoIcon />
        <h1 className={styles.title}>Wrench CRM</h1>
      </div>
      <UserBadge />
    </header>
  );
};
