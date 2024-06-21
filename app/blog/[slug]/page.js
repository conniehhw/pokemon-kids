import styles from "../../pokedex1/pokedex1.module.css";

// You can create a dynamic route segment by wrapping the directory name
// in square brackets([]). For example, [name], [slug], [id], etc.

const BlogPost = ({ params: { slug } }) => {
  return (
    <p className={styles.slug}>
      Showing the blog post for the slug <strong>{slug}</strong>
    </p>
  );
};

export default BlogPost;
