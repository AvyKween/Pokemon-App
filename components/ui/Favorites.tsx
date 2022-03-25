import { FC } from "react";

import { Grid } from "@nextui-org/react";
import { FavoriteCard } from "./";

interface Props {
  pokemons: number[];
}

export const Favorites: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
      pokemons.map( id => (
        <FavoriteCard key={id} pokemonId={id}/>
      ))
      }
    </Grid.Container>
  )
}
