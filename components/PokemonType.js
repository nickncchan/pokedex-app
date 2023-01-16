const PokemonType = ({ pokemonType }) => {
  let typesArr = [];

  for (let i = 0; i < pokemonType.length; i++) {
    let typeName =
      pokemonType[i].type.name.charAt(0).toUpperCase() +
      pokemonType[i].type.name.slice(1);
    typesArr.push(typeName);
  }

  const typeRender = () => {
    return (
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${typesArr[1]}_(type)`}>
        {typesArr[1]}
      </a>
    );
  };

  return (
    <p>
      <a href="https://bulbapedia.bulbagarden.net/wiki/Type">
        <u>Type:</u>
      </a>{" "}
      <a href={`https://bulbapedia.bulbagarden.net/wiki/${typesArr[0]}_(type)`}>
        {typesArr[0]}
      </a>
      {typesArr.length > 1 ? " & " : null}
      {typesArr.length > 1 ? typeRender() : null}
    </p>
  );
};

export default PokemonType;
