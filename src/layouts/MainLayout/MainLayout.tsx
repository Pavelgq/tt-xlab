import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";

import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <section className={styles.container}>
        <Navbar />
        <Outlet />
      </section>
    </div>
  );
};
