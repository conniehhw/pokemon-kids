import styles from "../page.module.css";
// import styles from "../about/page.module.css";
// import styles from "../components/container.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { LoremIpsum } from "react-lorem-ipsum";
import Image from "next/image";

export default function About() {
  return (
    <main className={styles.main}>
      <h1>About Page</h1>

      <div className={styles.description}>
        <Row>
          <Col>
            <p>Column 1</p>
          </Col>
          <Col>
            <p>Column 1</p>
          </Col>
          <Col>Column 2</Col>
        </Row>
      </div>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/pokemon-logo.png"
              alt="Pokemon Logo"
              // className={styles.vercelLogo}
              width={150}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <Container
        style={{
          backgroundColor: "#FFDE00",
          borderRadius: "25px",
        }}
        class="w-auto"
      >
        <Row>
          <Col>
            <LoremIpsum
              p={1}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </main>
  );
}
