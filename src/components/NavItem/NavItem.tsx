import cn from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItemsProps } from "./NavItems.props";
import styles from "./NavItem.module.scss";
import { useEffect, useState } from "react";

export const NavItem = ({
  name,
  link = "",
  Icon,
  subItems = [],
}: NavItemsProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    setActive(location.pathname === link);
  }, [location, link]);

  const toggleSubMenu = () => {
    if (subItems.length > 0) {
      setSubmenu(!submenu);
    }
    if (link) {
      navigate(link);
    }
  };

  return (
    <li
      className={cn(styles.item, {
        [styles.active]: active,
      })}
    >
      <button
        type="button"
        className={cn(styles.wrapper, styles.button, {
          [styles.nested]: subItems.length > 0,
          [styles.close]: submenu,
        })}
        onClick={toggleSubMenu}
      >
        <Icon className={styles.icon} />
        <span className={styles.text}>{name}</span>
      </button>
      {submenu && subItems.length > 0 && (
        <ul className={styles.subList}>
          {subItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </ul>
      )}
    </li>
  );
};
