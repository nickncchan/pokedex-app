import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const randomNum = Math.floor(Math.random() * 905) + 1;

  const pokemonRoute = (e) => {
    e.preventDefault();
    router.push(`/pokedex/${randomNum}`);
  };

  const renderPokemon = () => {
    let idArr = [];

    for (let i = 0; i < 6; i++) {
      idArr.push(Math.floor(Math.random() * 905) + 1);
    }

    return idArr.map((id) => (
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt="Pokedex"
        width={150}
        height={150}
        priority={true}
      />
    ));
  };

  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel="icon"
          href="https://archives.bulbagarden.net/media/upload/d/dc/GO_Poké_Ball.png"
        />
      </Head>
      <div className="text-center py-5">
        <h2 className="text-4xl py-5">Welcome to the Pokédex App!</h2>
      </div>
      <div className="flex justify-center">
        <Image
          src={`https://archives.bulbagarden.net/media/upload/b/ba/Pt_Pok%C3%A9dex.png`}
          alt="Pokedex"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <div className="text-center py-5">
        <p>
          You can find information about your favorite Pokémon all in one place!
        </p>
        <button
          onClick={pokemonRoute}
          className="bg-blue-700 hover:bg-blue-900 text-white my-8 py-1 px-3 rounded-full"
        >
          Click here to get started!
        </button>
      </div>
      <div className="flex flex-wrap justify-center">{renderPokemon()}</div>
    </div>
  );
}
