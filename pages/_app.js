import AppContext from '@/components/AppContext'
import '@/styles/globals.css'
import { useState } from 'react'  



export default function App({ Component, pageProps }) {

   const [ person , setPerson] = useState();
   const [ bio , setBio] = useState();

  return (
  <AppContext.Provider value={{ person , setPerson , bio , setBio  }}>
    <Component {...pageProps} />
  </AppContext.Provider>)
}
