import styles from "../../pokedex1/pokedex1.module.css";

const StorePage = ({ params: { name } }) => {
  console.log(name);
  return (
    <p className={styles.slug}>
      Showing the store page for the name <strong>{name}</strong>
    </p>
  );
};

export default StorePage;

// How about the route /store? It gives us 404, page not found.
// One way to fix that is by creating a page.js file inside the
// app/store/ directory. If you don't want that, you can make the
// catch-all segment as an optional catch-all segment by wrapping the parameter(or directory name) in double square brackets, [[...name]].
// Now even the /store route page will be served from the app/store/[[...name]]/page.js. However, in this case, the value of name will be undefined and the params prop value will be {}.
