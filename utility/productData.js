import fs from "fs";

export const productData = JSON.parse(
  fs.readFileSync("./products.json", "utf-8")
);
