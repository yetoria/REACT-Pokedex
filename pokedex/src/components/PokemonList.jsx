const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
  
    useEffect(() => {
      axios.get('https://pokebuildapi.fr/api/v1/pokemon')
        .then(response => {
          setPokemonList(response.data);
        })
        .catch(error => {
          console.error('Error fetching pokemon:', error);
        });
    }, []);
  
    return (
      <div>
        <h2>Liste des Pokémon</h2>
        <ul>
          {pokemonList.map(pokemon => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokemonList;