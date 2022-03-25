import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router"
import { FC } from "react"
import { SmallPokemon } from "../../interfaces"

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon: {name, id, img} }) => {

  const router = useRouter();

  const onClick = () => {
    setTimeout(() => {
      router.push(`/name/${ name }`)  
    }, 365);
  }

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 2 } key={ id } >
    <Card hoverable clickable onClick={ onClick }>
      <Card.Body css={{ p: 2 }}>
        <Card.Image src={ img } width='100%' height={ 218 } css={{ p: 15 }}/>
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
          <Text transform='capitalize'>{ name }</Text>
          <Text>#{ id }</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
  )
}
