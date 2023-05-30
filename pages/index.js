import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '@/components/AppContext';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import useDarkMode from './useDarkMode';
import Head from 'next/head';
import DarkModeButton from '@/components/DarkModeButton';
import { getSiyar } from './api/axios';
import SearchBar from '@/components/SearchBar';
import ListPage from '@/components/ListPage';
import CardPerson from '@/components/CardPerson';
import GoTopButton from '@/components/GoTopButton';






export default function Home() {

  const { person, setPerson, bio, setBio , valueInput , setValueInput  } = useContext(AppContext);

  const [siyar, setSiyar] = useState([]);
  const [searcheResults, setSearcheResults] = useState([]);
  const router = useRouter();
  const [colorTheme, setTheme] = useDarkMode();
 

 
 

  useEffect(() => {
    getSiyar().then( json => {
      setSiyar(json);
      return json 
    }).then(json => {
      setSearcheResults(json);
    })
  }, []);



  
  

  return (
    <div>

      <Head>
        <title>Home</title>
      </Head>

      <main className={`${siyar ? 'dark:bg-ForBackprimary  dark:text-ForTexts h-auto bg-gray-100' : 'dark:bg-ForBackprimary dark:text-ForTexts h-screen  bg-gray-100 '}`} >
       
        <div className='  bg-white dark:bg-ForBackSecondary sm:px-11  px-6 h-40 flex flex-col justify-center items-center relative     shadow-xl  shadow-black/5  '>

          <div className='flex  mt-20 justify-between w-full    '>
           <div className=' dark:bg-ForBackprimary bg-gray-100 sm:px-4 p-2 sm:py-2 '>
           <DarkModeButton />
           </div>
            <h2 className=' font-arabicFont sm:text-3xl text-xl  dark:text-ForTexts text-black   z-10 '> أكثر الشخصيات العربية </h2>
          </div>
          <div className=' flex flex-row w-[340] mt-9  bg-[#644] '>
           <SearchBar  siyar={siyar} setSearcheResults={setSearcheResults} searcheResults={searcheResults} /> 
        
          </div>
 
        </div>


           {/* content  */}
        <ListPage sendResults={searcheResults} />

        <GoTopButton/>
        <Footer/>
        
      </main>
    </div>

  )
}
