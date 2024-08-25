import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Check if window is defined (which means we are in the browser)
    if (typeof window !== "undefined") {
      const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const calculateTransform = () => {
    if (typeof window === "undefined") return "translate(0px, 0px)"; // No transform on the server

    const { x, y } = mousePosition;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (x - centerX) * 0.02;
    const moveY = (y - centerY) * 0.02;

    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>My Personal Website</title>
      </Head>

      <main className={styles.main}>
        <h1
          className={styles.title}
          style={{ transform: calculateTransform() }}
        >
          Welcome to My Personal Website
        </h1>
        <p
          className={styles.description}
          style={{ transform: calculateTransform() }}
        >
          Hi, I m Kavindu Wickramasekara, a Technology Innovator.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 My Personal Website</p>
      </footer>
    </div>
  );
}
