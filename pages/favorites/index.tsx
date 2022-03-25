import { useEffect, useState } from 'react';

import { Layout } from "../../components/layouts"
import { Favorites, NoFavorites } from "../../components/ui"
import { localFavorites } from '../../utils';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemonList().sort( (a, b) => a-b) );
  }, [])
  

  return (
    <Layout title="Pokemon App - Favorites">
      
      {
        favoritePokemons.length === 0 
          ? (<NoFavorites />)
          : (<Favorites pokemons={ favoritePokemons }/>)
      }
      
    </Layout>
  )
}

export default FavoritesPage