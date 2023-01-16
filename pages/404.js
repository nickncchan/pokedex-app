import Image from "next/image";
import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 Error</title>
        <link
          rel="icon"
          href="https://archives.bulbagarden.net/media/upload/d/dc/GO_Poké_Ball.png"
        />
      </Head>
      <div className="py-20">
        <h1 className="text-center py-10">
          Uh oh! Your Pokémon was not found!
        </h1>
        <div className="flex justify-center">
          <Image
            src={`https://i1.sndcdn.com/artworks-000358340868-woq1uy-t500x500.jpg`}
            alt="Sad Pikachu"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
