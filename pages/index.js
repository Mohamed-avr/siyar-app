import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '@/component/AppContext';
import { useRouter } from 'next/router';
import Footer from '@/component/Footer';
import useDarkMode from './useDarkMode';
import Head from 'next/head';
import DarkModeButton from '@/component/DarkModeButton';
import { getSiyar } from './api/axios';
import SearchBar from '@/component/SearchBar';
import ListPage from '@/component/ListPage';
import CardPerson from '@/component/CardPerson';






export default function Home() {

  const { person, setPerson, bio, setBio } = useContext(AppContext);

  const [siyar, setSiyar] = useState([]);
  const [searcheResults, setSearcheResults] = useState([]);
  const router = useRouter();
  const [colorTheme, setTheme] = useDarkMode();

 
 

  useEffect(() => {
    getSiyar().then( json => {
      setSiyar(json);
      return json 
    }).then(json => {
      setSearcheResults(json)
    })
  }, []);

  console.log(searcheResults , 'this is the results Index App');

  return (
    <div>

      <Head>
        <title>Home</title>
      </Head>

      <main className={`${siyar ? 'dark:bg-ForBackprimary dark:text-ForTexts h-auto' : 'dark:bg-ForBackprimary dark:text-ForTexts h-screen'}`} >
       
        <div className='  dark:bg-ForBackSecondary sm:px-11  px-6 h-40 flex flex-col justify-center items-center relative  rounded-bl-[1.6rem] sm:rounded-bl-[3rem] rounded-br-[1.6rem] sm:rounded-br-[3rem]  shadow-xl  shadow-black/5  '>

          <div className='flex  mt-20 justify-between w-full  '>
           <div className=' bg-black/10 px-4 py-2 rounded-xl '>
           <DarkModeButton />
           </div>
            <h2 className=' font-arabicFont sm:text-3xl text-xl  dark:text-ForTexts text-black   z-10 '> أكثر الشخصيات العربية </h2>
          </div>
          <SearchBar  siyar={siyar} setSearcheResults={setSearcheResults} />
 
        </div>


        <div className='flex justify-center items-center  flex-wrap mt-16  '>
        <ListPage sendResults={searcheResults} />
        </div>
      
        
       

      </main>
    </div>

  )
}
