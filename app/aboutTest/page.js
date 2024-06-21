import styles from "../pokedex1/pokedex1.module.css";

// const AboutPage = () => {
//   return (
//     <>
//       <p className={styles.slug}>About Page</p>
//     </>
//   );
// };

// export default AboutPage;

export default async function AboutPage() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");

  const data = await res.json();

  return (
    <>
      <h1 className={styles.slug}>{data.full_name}</h1>
      <p>Home</p>
    </>
  );
}
