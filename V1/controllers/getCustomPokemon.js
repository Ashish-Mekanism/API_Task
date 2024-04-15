import { pokemonData } from "../../utility/pokemonData.js";

export const getCustomPokemon = (req, res) => {
  const page = req.query.page || 1;
  const per_page = req.query.per_page || 48;
  const type = req.query.type;

  const filteredPokemon = type
    ? pokemonData.filter((pokemon) => {
        let isexists = false;
        pokemon.type.forEach((element) => {
          if (element.toLowerCase().includes(type.toLowerCase())) {
            isexists = true;
          }
        });
        return isexists;
      })
    : pokemonData;

  const total = filteredPokemon.length;

  const startIndex = (page - 1) * per_page;
  const endIndex = page * per_page;
  const paginatedPokemon = filteredPokemon.slice(startIndex, endIndex);
  res.status(200).json({
    status: "success",
    total: total,
    data: paginatedPokemon,
  });
};
