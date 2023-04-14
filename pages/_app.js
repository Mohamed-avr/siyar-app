import AppContext from '@/component/appContext'
import '@/styles/globals.css'
import { useState } from 'react'


export default function App({ Component, pageProps }) {

   const [info , setInfo] = useState({"name":"empty" , "bio":"empty" , "id":0 })

  return (
  <AppContext.Provider value={{ info , setInfo  }}>
    <Component {...pageProps} />
  </AppContext.Provider>)
}
