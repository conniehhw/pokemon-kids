import { NextResponse } from "next/server";

async function fetchCoins() {
  const response = await fetch(
    "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
    {
      method: "GET",
      headers: {
        "x-RapidAPI-Key": "5397d4a216msh553bf7f43cb6ce0p1d52f6jsn775a66753d27",
        "x-Rapidapi-Host": "coinranking1.p.rapidapi.com",
      },
    }
  );

  const coins = await response.json();
  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  return NextResponse.json(coins);
}
