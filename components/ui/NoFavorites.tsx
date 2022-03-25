import { Container, Image, Text } from "@nextui-org/react"

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Text h1 css={{ mt: '230px',  opacity: '0.5'}}>No Favorites yet</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="pikachu"
        width={250}
        height={250}
        css={{
          opacity: 0.2
        }}
        />
    </Container>
  )
}
