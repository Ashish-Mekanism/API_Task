import { pokemonType } from "../../utility/pockemonType.js";
const convertData = (type) => ({
  label: type.english,
  value: type.english.toLowerCase(),
});
export const getPockemonType = (req, res) => {
  const convertedData = pokemonType.map((type) => convertData(type));
  res.status(200).json({
    status: "success",
    data: convertedData,
  });
};
