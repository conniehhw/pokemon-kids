async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <main></main>;
}
