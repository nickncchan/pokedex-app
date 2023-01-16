import Head from "next/head";

export default function Home() {
  const randomId = Math.floor(Math.random() * 905) + 1;

  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel="icon"
          href="https://archives.bulbagarden.net/media/upload/d/dc/GO_Poké_Ball.png"
        />
      </Head>
      <h1 className="text-2xl pl-1 pt-2">Welcome to the Pokedex App!</h1>
    </div>
  );
}
