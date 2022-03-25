import { FC } from "react"

import { Grid, Card } from "@nextui-org/react"
import { useRouter } from "next/router"

interface Props {
    pokemonId: number
}

export const FavoriteCard: FC<Props> = ({ pokemonId }) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)  
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={2} key={ pokemonId }>
    <Card hoverable clickable onClick={ onFavoriteClicked } css={{ p: '10px' }}>
      <Card.Image 
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
      css={{ p: '10'}}
      width='100%'
      height={218}
      />
    </Card>
    </Grid>
  )
}


