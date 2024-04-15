import express from "express";
import { getCustomPokemon } from "../controllers/getCustomPokemon.js";
import { getPockemonType } from "../controllers/getPokemonType.js";

import { searchPokemons } from "../../V1/controllers/searchPokemons.js";

const getPockemonRouter = express.Router();

getPockemonRouter.get("/", getCustomPokemon);
getPockemonRouter.get("/types", getPockemonType);
getPockemonRouter.get("/:name", searchPokemons);

export default getPockemonRouter;
