import AppContext from '@/components/AppContext'
import '@/styles/globals.css'
import { useState } from 'react'  



export default function App({ Component, pageProps }) {

   const [ person , setPerson] = useState();
   const [ bio , setBio] = useState();
   const [valueInput , setValueInput] = useState(false);

  return (
  <AppContext.Provider value={{ person , setPerson , bio , setBio , valueInput , setValueInput }}>
    <Component {...pageProps} />
  </AppContext.Provider>)
}
