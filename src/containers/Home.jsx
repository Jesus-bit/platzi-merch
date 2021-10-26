import React from 'react';
import { Helmet } from 'react-helmet';
import Products from '../components/Products'

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Platzi Merch - Products</title>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@jesus_bit"/>
      <meta name="twitter:creator" content="@jesus_bit"/>
      <meta name="twitter:title" content="Platzi Conf Store"/>
      <meta name="twitter:description" content="Platzi Conf Store"/>
      <meta
        name="twitter:image"
        content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
      />
      <meta property="og:title" content="Platzi Conf Store"/>
      <meta property="og:description" content="Platzi Conf Store"/>
      <meta property="og:url" content="platzistore.xyz" />
      <meta property="og:site_name" content="Platzi Conf Store" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
    </Helmet>
    <Products  />
    </>
  )
}
