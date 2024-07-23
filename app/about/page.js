// import styles from "../page.module.css";
import styles from "../about/about.module.css";

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Link from "next/link";
// import { LoremIpsum } from "react-lorem-ipsum";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          {/* <li>
            <a href="/resources">Resources</a>
          </li> */}
          <li>About</li>
        </ul>
      </div>
      <div className={styles.grid}>
        <div>
          <Image
            className={styles.img}
            src="/images/pokemon-babies.png"
            layout="responsive"
            height={280}
            width={501}
            alt="pokemon babies"
          />
        </div>
      </div>
      {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}
    </div>
  );
}

// <div>
//   <div className={styles.Title}>
//     <h5>Title</h5>
//   </div>
//   <div>
//     <div className={styles.scrollingwrapper} class="scrolling-wrapper">
//       <div className={styles.card}>
//         <Image
//           className={styles.img}
//           src="/images/pokemon-101a.png"
//           layout="responsive"
//           height={200}
//           width={200}
//           alt="All Pokemon Visual"
//         />
//         <div className={styles.cardtext}>
//           <h5>Pokemon 101</h5>
//           <h6>Frequently Asked Questions</h6>
//         </div>
//       </div>
//       <div className={styles.card}>
//         <Image
//           className={styles.img}
//           src="/images/pokemon-101a.png"
//           layout="responsive"
//           height={200}
//           width={200}
//           alt="All Pokemon Visual"
//         />
//         <div className={styles.cardtext}>
//           <h5>Pokemon 101</h5>
//           <h6>Frequently Asked Questions</h6>
//         </div>
//       </div>
//       <div className={styles.card}>
//         <Image
//           className={styles.img}
//           src="/images/pokemon-101a.png"
//           layout="responsive"
//           height={200}
//           width={200}
//           alt="All Pokemon Visual"
//         />{" "}
//         <div className={styles.cardtext}>
//           <h5>Pokemon 101</h5>
//           <h6>Frequently Asked Questions</h6>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

/* <div className={styles.card}>
          <h2>Card</h2>
        </div>
        <div className={styles.card}>
          <h2>Card</h2>
          <div className={styles.card}>
            <h2>Card</h2>
          </div>
          <div className={styles.card}>
            <h2>Card</h2>
          </div>
          <div className={styles.card}>
            <h2>Card</h2>
          </div>
          <div className={styles.card}>
            <h2>Card</h2>
          </div> */

/* <div className={styles.container}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
        <div>Nine</div>
        <div>Ten</div>
        <div>Eleven</div>
        <div>Twelve</div>
      </div>
      <div className={styles.parent}>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <col></col>
        <row></row>
        <row></row>
        <row></row>
        <row></row>
        <row></row>
      </div> */
