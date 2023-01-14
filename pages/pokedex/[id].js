const Pokedex = ({ pokemonData }) => {
  console.log(pokemonData);
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  console.log(data);

  return { props: { pokemonData: data } };
}

export default Pokedex;
