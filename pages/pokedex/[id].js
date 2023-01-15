import Image from "next/image";
import Head from "next/head";
import PokemonName from "@/components/pokemonName";
import PokemonType from "@/components/PokemonType";

const Pokedex = ({ pokemonData }) => {
  return (
    <div>
      <Head>
        <title>Pokédex</title>
        <link
          rel="Pokeball"
          href="https://archives.bulbagarden.net/media/upload/d/dc/GO_Poké_Ball.png"
        />
      </Head>

      <div className="text-center">
        <h2 className="text-5xl py-3">
          <u>Pokédex</u>
        </h2>
        <div className="text-xl py-3">
          Click the links to go to the{" "}
          <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">
            Bulbapedia Wiki
          </a>{" "}
          for more info!
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
          alt="Pokémon Image"
          width={250}
          height={250}
        />
      </div>

      <div className="flex justify-center align-start">
        <div className="text-left">
          <PokemonName pokemonName={pokemonData.name} />
          <p className="py-3">
            <a href="https://bulbapedia.bulbagarden.net/wiki/Height">
              <u>Height:</u>
            </a>{" "}
            {pokemonData.height / 10} m
          </p>
          <p>
            <a href="https://bulbapedia.bulbagarden.net/wiki/Weight">
              <u>Weight:</u>
            </a>{" "}
            {pokemonData.weight / 10} kg
          </p>
          <div className="py-3">
            <PokemonType pokemonType={pokemonData.types} />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return { props: { pokemonData: data } };
}

export default Pokedex;
