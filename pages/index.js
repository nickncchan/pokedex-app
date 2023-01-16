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
        />
      </div>
      <div className="text-center py-5">
        <p>
          You can find information about your favorite Pokemon all in one place!
        </p>
        <button
          onClick={pokemonRoute}
          className="bg-blue-500 hover:bg-blue-700 text-white my-5 py-1 px-3 rounded-full"
        >
          Click here to get started!
        </button>
      </div>
    </div>
  );
}
