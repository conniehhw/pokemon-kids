import React from "react";
import Image from "next/image";
import styles from "../components/components.module.css";

export default function Coins({ coins }) {
  return (
    <>
      <div>
        <ul className={styles.allCoins}>
          {coins.map((coin) => (
            <li key={coin.uuid}>
              <Image
                src={coin.iconUrl}
                alt={coin.name}
                width={70}
                height={70}
                priority
              />
              <h3>{coin.name}</h3>
              <p>{coin.symbol}</p>
              <p>{coin.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
