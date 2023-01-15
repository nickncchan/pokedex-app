const PokemonName = ({ pokemonName }) => {
  const renderName = () => {
    let name = "";

    if (pokemonName.indexOf("-") > -1) {
      const splitName = pokemonName.split("-");

      if (
        splitName[1] === "incarnate" ||
        splitName[1] === "standard" ||
        splitName[1] === "disguised" ||
        splitName[1] === "land"
      ) {
        name = splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
      } else {
        name =
          splitName[0].charAt(0).toUpperCase() +
          splitName[0].slice(1) +
          " " +
          splitName[1].charAt(0).toUpperCase() +
          splitName[1].slice(1);
      }
    } else {
      name = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    }

    return name;
  };

  return (
    <p>
      <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_name">
        <u>Name:</u>
      </a>{" "}
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${renderName()}`}>
        {renderName()}
      </a>
    </p>
  );
};

export default PokemonName;
