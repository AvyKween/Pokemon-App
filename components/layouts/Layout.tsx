import { FC } from "react"
import Head from "next/head"
import { Navbar } from "../ui";

interface Props {
  title?: string;
  pokemon?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title, pokemon }) => {
  
  return (
    <>
      <Head>
        <title>{ title || pokemon || 'Pokemon App' }</title>

        <link rel="shortcut icon" href={`${origin}/img/favicon.png`} type="image/x-icon" />

        <meta name="author" content="AvyDev"/>
        <meta name="description" content={ pokemon ? `Info about Pokemon ${ pokemon ||  title || 'Pokemon App' } ` : 'Pokemon App'}/>
        <meta name="keywords" content={ `${pokemon || 'pokemon-app'}, pokemon, pokedex` }/>

        <meta property="og:title" content={ pokemon ? `Info about ${ pokemon ||  title || 'Pokemon App'  }` : 'Pokemon App'} />
        <meta property="og:description" content={ pokemon ? `This is the page about ${ pokemon ||  title || 'Pokemon App' }` : 'Welcome to the Pokemon App'} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        { children }
      </main>
    </>
  )
}
