export default function Home() {
  const randomId = Math.floor(Math.random() * 905) + 1;

  return <h1 className="text-2xl pl-1 pt-2">Welcome to the Pokedex App!</h1>;
}
