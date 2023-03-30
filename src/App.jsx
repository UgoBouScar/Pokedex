import { useState } from "react";
import PokemonCard from "./PokemonCard";
import Button from "./button";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const pokemon = pokemonList[index];
  function handlePlusClick() {
    console.log("Hello Julien");
    setIndex(index + 1);
  }

  function handleMinusClick() {
    console.log("Hello Julien");
    setIndex(index - 1);
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <Button
        index={index}
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick}
      />
    </div>
  );
}

export default App;
