const PokemonType = ({ pokemonType }) => {
  let typesArr = [];

  for (let i = 0; i < pokemonType.length; i++) {
    let typeName =
      pokemonType[i].type.name.charAt(0).toUpperCase() +
      pokemonType[i].type.name.slice(1);
    typesArr.push(typeName);
  }

  const typeRender = () => {
    if (typesArr.length > 1) {
      return (
        <p>
          <a href="https://bulbapedia.bulbagarden.net/wiki/Type">
            <u>Types:</u>
          </a>{" "}
          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${typesArr[0]}_(type)`}
          >
            {typesArr[0]}
          </a>{" "}
          &{" "}
          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${typesArr[1]}_(type)`}
          >
            {typesArr[1]}
          </a>
        </p>
      );
    } else {
      return (
        <p>
          <a href="https://bulbapedia.bulbagarden.net/wiki/Type">
            <u>Type:</u>
          </a>{" "}
          <a
            href={`https://bulbapedia.bulbagarden.net/wiki/${typesArr[0]}_(type)`}
          >
            {typesArr[0]}
          </a>
        </p>
      );
    }
  };

  return typeRender();
};

export default PokemonType;
