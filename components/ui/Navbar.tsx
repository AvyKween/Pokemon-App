import NextLink from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {

  const router = useRouter()
  const { theme } = useTheme()  

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray900.value
    }}>

      {/* TODO: Random pokemon when onClick Bulbasaur image*/}
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt="pkmn"
        width={70}
        height={70}
      />
      
      <NextLink href='/' passHref>
        <Link css={{ display:'flex', alignItems:'center'}}>
          <Text color="#fff" h2>P</Text>
          <Text color="#fff" h3>okemon</Text>
        </Link>
      </NextLink>

      <Spacer css={{ flexGrow: 1 }}/>
      <NextLink href='/favorites' passHref>
        <Link>
          <Text color="#fff">{ router.asPath === '/favorites' ? null : 'Favorites' }</Text>
        </Link>
      </NextLink>
    </div>
  )
}
