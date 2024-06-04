// import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/components.module.css";

function Header1() {
  return (
    <div className={styles.nav1}>
      <div>
        <Image
          src="/images/pokemon-logo.png"
          height={75}
          width={175}
          alt="Pokemon Logo"
        />
      </div>

      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/pokedex">Pokedex</Link>
      </div>
      <div>
        <Link href="/resources">Resources</Link>
      </div>
      <div>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header1;

<Link href="/about" class="nav-link">
  About
</Link>;

{
  /* <header className={styles.header1}>
        <div class="grid-item-brand">
          <a href="#" class="logo">
            <img src="logo.png" alt="Amazon" />
          </a>
        </div> */
}
{
  /* <div class="grid-item-search">
          <input
            type="text"
            class="search-input"
            placeholder="Search for products"
          />
          <button class="search-button">
            <img
              src="https://img.icons8.com/?size=512&id=7695&format=png"
              alt=""
            />
          </button>
        </div> */
}
{
  /* <div class="grid-item-account">
          <a href="#" class="nav-link">
            Hello, Sign in
          </a>

          <a href="#" class="nav-link cart-link">
            Cart
            <span class="cart-count">0</span>
          </a>
        </div>
      </header> */
}
