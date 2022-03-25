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
        <title>{ pokemon || title || 'Pokemon App' }</title>
        <meta name="author" content="AvyDev"/>
        <meta name="description" content={ pokemon ? `Info about Pokemon ${ pokemon } ` : 'Pokemon App'}/>
        <meta name="keywords" content={ `${pokemon}, pokemon, pokedex` }/>

        <meta property="og:title" content={`Info about ${ pokemon }`} />
        <meta property="og:description" content={`This is the page about ${ pokemon }`} />
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
