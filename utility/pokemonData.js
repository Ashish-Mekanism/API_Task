import fs from "fs";
export const pokemonData = JSON.parse(
  fs.readFileSync("./pokedex.json", "utf-8")
);
