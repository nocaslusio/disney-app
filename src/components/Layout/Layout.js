import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "Disney App"}) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/disney.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>© Disney All rights reserved.</footer>
    </div>
  );
};

export default Layout;
