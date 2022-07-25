import '../styles/globals.css'
import '../styles/utils.css'
import '../styles/animations.css'

import { PageContext } from '../Context/pageContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [pageValue, setPageValue] = useState()

  return (
    <PageContext.Provider value={{ pageValue, setPageValue }}>
      <Component {...pageProps} />
    </PageContext.Provider>
  )
}

export default MyApp
