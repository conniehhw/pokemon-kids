import styles from "../../pokedex1/pokedex1.module.css";

const PokePage = ({ params: { pokeName } }) => {
  console.log(pokeName);
  return (
    <p className={styles.slug}>
      Showing the store page for the name <strong>{pokeName}</strong>
    </p>
  );
};

export default PokePage;
