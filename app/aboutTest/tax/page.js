// using aboutTest/tax to test functional search bar to reapply

"use client"; //has to be client side render when using react hooks

import styles from "../../pokedex1/pokedex1.module.css";
import { useState, useEffect } from "react";
import Coins from "../../components/Coins";
import SearchCoins from "../../components/SearchCoins";

export default function TaxPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const response = await fetch("/api/coins");
      const coins = await response.json();
      setCoins(coins.data.coins);
    };
    getCoins();
  }, []);

  return (
    <>
      <p className={styles.slug}>Tax Page - nested in About</p>
      <h1 className={styles.title}>Cryto Coins</h1>
      <SearchCoins getSearchResults={(results) => setCoins(results)} />
      <Coins coins={coins} />
    </>
  );
}

// export default TaxPage;
