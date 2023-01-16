import { nanoid } from "nanoid";

const PokemonStats = ({ pokemonStats }) => {
  let statsArr = [];

  for (let i = 0; i < pokemonStats.length; i++) {
    let statsName = "";

    if (pokemonStats[i].stat.name.indexOf("-") > -1) {
      const splitName = pokemonStats[i].stat.name.split("-");
      statsName =
        splitName[0].charAt(0).toUpperCase() +
        splitName[0].slice(1) +
        " " +
        splitName[1].charAt(0).toUpperCase() +
        splitName[1].slice(1);
    } else if (pokemonStats[i].stat.name === "hp") {
      statsName = pokemonStats[i].stat.name.toUpperCase();
    } else {
      statsName =
        pokemonStats[i].stat.name.charAt(0).toUpperCase() +
        pokemonStats[i].stat.name.slice(1);
    }
    statsArr.push(`${statsName}: ${pokemonStats[i].base_stat}`);
  }

  const renderStats = () => {
    return statsArr.map((stat) => <li key={nanoid()}>{stat}</li>);
  };

  return (
    <a href="https://bulbapedia.bulbagarden.net/wiki/Stat">
      <u>Base Stats</u>
      <ul className="list-none">{renderStats()}</ul>
    </a>
  );
};

export default PokemonStats;
