import cn from "classnames";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className={styles.layout}>
      <Header open={isMenu} toggleMenu={setIsMenu} />
      <section className={styles.container}>
        <Navbar
          className={cn(styles.navbar, {
            [styles.show]: isMenu,
          })}
        />
        <Outlet />
      </section>
    </div>
  );
};
