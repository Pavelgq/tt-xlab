import cn from "classnames";
import { NavItem } from "../NavItem/NavItem";
import styles from "./Navbar.module.scss";
import { NavbarProps } from "./Navbar.props";
import { navItems } from "./NavbarData";

export const Navbar = ({ className = "" }: NavbarProps) => {
  return (
    <nav className={cn(styles.navbar, className)}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {navItems.length > 0 &&
          navItems.map((item) => <NavItem key={item.name} {...item}></NavItem>)}
      </ul>
    </nav>
  );
};
