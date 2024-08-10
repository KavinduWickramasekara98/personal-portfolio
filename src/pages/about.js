import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateTransform = () => {
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
        <title>About Me - My Personal Website</title>
      </Head>

      <main className={styles.main}>
        <h1
          className={styles.title}
          style={{ transform: calculateTransform() }}
        >
          About Me
        </h1>
        <p
          className={styles.description}
          style={{ transform: calculateTransform() }}
        >
          I am Kavindu Wickramasekara, a passionate Technology Innovator. Here's
          my story...
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 My Personal Website</p>
      </footer>
    </div>
  );
}
