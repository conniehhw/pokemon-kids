import styles from "../../pokedex1/pokedex1.module.css";

// You can create a dynamic route segment by wrapping the directory name
// in square brackets([]). For example, [name], [slug], [id], etc.

const BlogPostId = ({ params: { id } }) => {
  return (
    <p className={styles.slug}>
      Showing the blog post for the id <strong>{id}</strong>
    </p>
  );
};

export default BlogPostId;

// export default function BlogPostId({ params }) {
//   return <h1>Id: {params.id}</h1>;
// }
