import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const randomId = Math.floor(Math.random() * 905) + 1;

  return (
    <div className="px-2 py-1">
      <Link href="/">Home</Link> |{" "}
      <Link href={`/pokedex/${randomId}`}>Pokédex</Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
