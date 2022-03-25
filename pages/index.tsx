import type { GetStaticProps, NextPage } from 'next'
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemon: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title='Pokemon App'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemon.map( (pkmn) => <PokemonCard pokemon={ pkmn } key={pkmn.name}/>)
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (/*context*/) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'

  const pokemon: SmallPokemon[] = data.results.map( (pkmn, i) => ({
    ...pkmn,
    id: i+1,
    img: `${baseURL}/${i+1}.svg`,
  }))
  
  return {
    props: {
      pokemon
    }
  }
}

export default HomePage;