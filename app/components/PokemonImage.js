"use client";
import Image from "next/image";

export function PokemonImage({ image, name }) {
  return (
    <Image
      src={image}
      // width="200"
      // height="200"
      alt={"Picture of" + name}
      priority
      fill
      style={{ objectFit: "contain" }}
      className="transition-opacity opacity-0 duration-[2s]"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
    />
  );
}
