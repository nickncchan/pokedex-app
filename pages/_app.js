import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="px-2 py-1 text-2xl">
      <Link href="/">Home</Link> | <Link href={`/pokedex/1`}>Pokédex</Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
