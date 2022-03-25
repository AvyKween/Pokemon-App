import { useEffect, useState } from 'react';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import confetti from 'canvas-confetti';

import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';

interface Props {
  pokemon: Pokemon;
}
const Capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

const PokemonPage: NextPage<Props> = ({ pokemon, pokemon: { id } }) => {

  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    setIsInFavorites(localFavorites.existFavorite(id) )
  }, [id])

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( id )
    setIsInFavorites( localFavorites.existFavorite(id) )

    if (isInFavorites) return;

    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 360,
      angle: 220,
      ticks: 60,
      origin: {
        x: 0.925,
        y: 0.12,
      }
    })

  }

  return (
    <Layout title={`Pokemon App - ${Capitalize(pokemon.name)}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png' } 
                alt={ pokemon.name }
                width='100%'
                height={ 280 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{pokemon.name}</Text>
              <Button
                color='gradient' 
                ghost={ !isInFavorites }
                onClick={ onToggleFavorite }  
              >
                { isInFavorites ? 'On Favorites' : 'Set Favorite' }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container direction='row' display='flex' gap={0} css={{ marginTop: '$10'}}>
                <Image
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  height={100}
                />
                <Image
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  height={100}
                />
                <Image
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  height={100}
                />
                <Image
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={12}></Grid>
      </Grid.Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const hundredFiftyFirst = [...Array(151)].map( (_, index) => `${index + 1}`)  

  return {
    paths: hundredFiftyFirst.map( id => ({
      params: { id }
    })),
    fallback: false
    // paths: [
    //   {
    //     params: {id: '1'}
    //   },
    //   {
    //     params: {id: '2'}
    //   },
    // ],
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string };
  
  return {
    props: {
      pokemon: await getPokemonInfo( id )
    }
  }
}

export default PokemonPage