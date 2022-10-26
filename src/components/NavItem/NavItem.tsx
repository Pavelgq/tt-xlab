import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";
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
  const [active, setActive] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    setActive(location.pathname === link);
  }, [location]);

  const toggleSubMenu = () => {
    console.log("toggle");
    if (subItems.length > 0) {
      setSubmenu(!submenu);
    }
  };

  return (
    <li
      className={cn(styles.item, {
        [styles.active]: active,
      })}
    >
      <div
        className={cn(styles.wrapper, {
          [styles.nested]: subItems.length > 0,
          [styles.close]: submenu,
        })}
      >
        <Icon className={styles.icon} />

        {link ? (
          <NavLink to={link} className={cn(styles.link)}>
            <span className={styles.text}>{name}</span>
          </NavLink>
        ) : (
          <button
            type="button"
            className={styles.button}
            onClick={toggleSubMenu}
          >
            <span className={styles.text}>{name}</span>
          </button>
        )}
      </div>
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
