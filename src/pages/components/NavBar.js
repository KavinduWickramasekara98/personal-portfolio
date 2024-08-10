import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/" className={styles.link}>
          Home
        </Link>{" "}
        |
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/projects" className={styles.link}>
          Projects
        </Link>
      </div>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}
