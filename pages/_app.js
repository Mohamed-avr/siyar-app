import AppContext from '@/component/AppContext'
import '@/styles/globals.css'
import { useState } from 'react'


export default function App({ Component, pageProps }) {

   const [info , setInfo] = useState({"name":"empty" , "bio":"empty" })

  return (
  <AppContext.Provider value={{ info , setInfo  }}>
    <Component {...pageProps} />
  </AppContext.Provider>)
}
