import { nanoid } from "nanoid";

const PokemonAbilities = ({ pokemonAbilities }) => {
  let abilitiesArr = [];

  for (let i = 0; i < pokemonAbilities.length; i++) {
    let abilityName = pokemonAbilities[i].ability.name;

    if (pokemonAbilities[i].ability.name.indexOf("-") > -1) {
      const words = abilityName.replace("-", " ").split(" ");
      const word1 = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      const word2 = words[1].charAt(0).toUpperCase() + words[1].slice(1);
      abilityName = word1 + " " + word2;
      abilitiesArr.push(abilityName);
    } else {
      abilitiesArr.push(
        abilityName.charAt(0).toUpperCase() + abilityName.slice(1)
      );
    }
  }

  const renderAbilities = () => {
    return abilitiesArr.map((ability) => (
      <li key={nanoid()}>
        <a
          href={`https://bulbapedia.bulbagarden.net/wiki/${ability}_(Ability)`}
          target="_blank"
        >
          {ability}
        </a>
      </li>
    ));
  };

  return (
    <p>
      <a href="https://bulbapedia.bulbagarden.net/wiki/Ability" target="_blank">
        <u>Abilities</u>
      </a>
      <ol className="pl-10 list-disc">{renderAbilities()}</ol>
    </p>
  );
};

export default PokemonAbilities;
