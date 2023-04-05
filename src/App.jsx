import { useState } from "react";
import PokemonCard from "./PokemonCard";
import NavBar from "./NavBar";
import { useEffect } from "react";




const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color: "#5FC47C",
    shout: "Bulllllllbasauurrrr"
    },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    color: "coral",
    shout:"Chahaaaaaarmandeeeeeer"
    },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    color: "#81D6D0",
    shout: "Ssssssssssssssssssquirtle",

    },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    color: "#E2F94E",
    shout: "Pikapikapikapikachhhhuuu"
    },
  {
    name: "mew",
    color: "#AE00FF",
    shout: "fkjdfghffihdsfdsfshjf"
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(pokemonList[0].color);
  const [shout, setShout] = useState(pokemonList[0].shout);
  const pokemon = pokemonList[index];
  function handlePlusClick() {
    console.log("Hello Julien");
    setIndex(index + 1);
    setColor(pokemonList[index + 1].color);
    setShout(pokemonList[index + 1].shout);

  }

  function handleMinusClick() {
    console.log("Hello Julien");
    setIndex(index - 1);
    setColor(pokemonList[index - 1].color);
    setShout(pokemonList[index - 1].shout);
    
  }

  useEffect(
    () => {
      alert("Bonjour jeune dresseur ! prêt à entamer le chemin vers la ligue Pokemon ?");
    },
    []
  );

  
  return (
    <div> 
      <PokemonCard pokemon={pokemon} />
      <NavBar
        color={color}
        shout={shout}
        index={index}
        handlePlusClick={handlePlusClick}
        handleMinusClick={handleMinusClick}
        setColor={setColor}
      />
    </div>
  );
}

export default App; 