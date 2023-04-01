import { useState } from "react";
import PokemonCard from "./PokemonCard";
import NavBar from "./NavBar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "#5FC47C"
    },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "coral"
    },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "#81D6D0"
    },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "#E2F94E"
    },
  {
    name: "mew",
    color: "#AE00FF"
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(pokemonList[0].color);
  const pokemon = pokemonList[index];
  function handlePlusClick() {
    console.log("Hello Julien");
    setIndex(index + 1);
    setColor(pokemonList[index + 1].color);
  }

  function handleMinusClick() {
    console.log("Hello Julien");
    setIndex(index - 1);
    setColor(pokemonList[index - 1].color);
    
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <NavBar
        color={color}
        index={index}
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick}
        setColor={setColor}
      />
    </div>
  );
}

export default App;