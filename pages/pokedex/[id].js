import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import PokemonName from "@/components/PokemonName";
import PokemonType from "@/components/PokemonType";
import PokemonAbilities from "@/components/PokemonAbilities";
import PokemonStats from "@/components/PokemonStats";

const Pokedex = ({ pokemonData }) => {
  const router = useRouter();
  const [routeId, setRouteId] = useState(null);

  const pokemonRoute = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${routeId}`);
  };

  return (
    <div className="pt-5">
      <Head>
        <title>Pokédex</title>
        <link
          rel="icon"
          href="https://archives.bulbagarden.net/media/upload/d/dc/GO_Poké_Ball.png"
        />
      </Head>
      <div className="text-center">
        <h2 className="text-5xl py-3">
          <u>Pokédex</u>
        </h2>
        <p className="text-xl py-3">
          Click the links to go to the{" "}
          <a href="https://bulbapedia.bulbagarden.net/wiki/Main_Page">
            Bulbapedia Wiki
          </a>{" "}
          for more info!
        </p>
        <p className="text-xl pb-3">
          <u>Note:</u> If you go beyond Pokédex #905, not all information may be
          shown.
        </p>
      </div>
      <div className="flex justify-center py-3">
        <form onSubmit={(e) => pokemonRoute(e)}>
          <input
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            placeholder="Name or ID"
            className="rounded-lg w-32 p-2 text-xl"
          />{" "}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold mx-1 py-1 px-3 rounded-full"
          >
            {" "}
            Search{" "}
          </button>
        </form>
      </div>
      <div className="flex justify-center py-3">
        <div className="w-auto p-3 bg-white border border-white rounded-lg shadow-md dark:bg-blue-900 dark:border-yellow-400">
          <p className="text-center py-3">
            #{pokemonData.id} of{" "}
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number`}
            >
              1008
            </a>
          </p>
          <div className="flex justify-center bg-white border border-white rounded-lg shadow-md dark:bg-gray-900 dark:border-yellow-400">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
              alt="Pokémon Image"
              width={300}
              height={300}
            />
          </div>

          <div className="flex justify-center align-start">
            <div className="text-left py-3">
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
              <p>
                <a href="https://bulbapedia.bulbagarden.net/wiki/Ability">
                  <u>Abilities</u>
                </a>
              </p>
              <div className="grid justify-center pb-3">
                <PokemonAbilities pokemonAbilities={pokemonData.abilities} />
              </div>
              <div className="grid justify-start pb-3">
                <a href="https://bulbapedia.bulbagarden.net/wiki/Stat">
                  <u>Base Stats</u>
                </a>
                <ul>
                  <PokemonStats pokemonStats={pokemonData.stats} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  let data;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    data = await res.json();
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { pokemonData: data } };
}

export default Pokedex;
