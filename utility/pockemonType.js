import fs from "fs";
export const pokemonType = JSON.parse(fs.readFileSync("./types.json", "utf-8"));
