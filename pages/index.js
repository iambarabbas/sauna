import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Sauna</h1>
      <p className={styles.description}>Landing page generated from your Figma — assets can be swapped by the deploy script.</p>
      <img src="/images/hero.svg" alt="hero" className={styles.hero} />
    </main>
  )
}
