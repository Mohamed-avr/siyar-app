import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '@/component/AppContext';
import { useRouter } from 'next/router';
import Footer from '@/component/Footer';
import useDarkMode from './useDarkMode';
import Head from 'next/head';
import DarkModeButton from '@/component/DarkModeButton';





export default function Home() {

  const { person, setPerson, bio, setBio } = useContext(AppContext);
  const [siyar, setSiyar] = useState();
  const router = useRouter();
  const [colorTheme, setTheme] = useDarkMode();


  useEffect(() => {
    axios.get('https://siyaar.onrender.com/siayr').then(function (res) {
      console.log(siyar)
      setSiyar(res.data)
      console.log(siyar)

    }).catch(function (error) {
      // handle error
      console.log(error)
    })
  }, [siyar]);



  return (
    <div>

      <Head>
        <title>Home</title>
      </Head>

      <main className={`${siyar ? 'dark:bg-ForBackprimary dark:text-ForTexts h-auto' : 'dark:bg-ForBackprimary dark:text-ForTexts h-screen'}`} >
        <div className=' dark:bg-ForBackSecondary sm:px-11  px-6 h-40 flex flex-col justify-center items-center relative  rounded-bl-[1.6rem] sm:rounded-bl-[3rem] rounded-br-[1.6rem] sm:rounded-br-[3rem]  shadow-xl  shadow-black/5  '>

          <div className='flex  mt-20 justify-between w-full  '>
            <DarkModeButton />
            <h2 className=' font-arabicFont sm:text-3xl text-xl dark:text-ForTexts text-black   z-10 '> أكثر الشخصيات العربية </h2>
          </div>

          <div className='mt-10  z-20   '>
            <input
              onInput={(e) => {
                console.log(e.target.value)
              }}
              type='text'
              placeholder='إبحث عن شخصية'
              className=' dark:bg-ForBackprimary  dark:text-white sm:w-[24rem] w-[18rem] outline-none border-2 bg-gray-50 border-slate-200   shadow-xl  h-14 text-right pr-4 rounded-full  text-xs text-black/75  font-arabicFont  ' />
          </div>

        </div>


        <div className='flex justify-center items-center  flex-wrap mt-16  '>
          {siyar ? siyar.map((e) => {
            return (
              <article key={e.id} className=' hover:bg-gray-100  dark:bg-ForBackSecondary  sm:w-[24rem] w-[20rem] m-2 rounded-lg bg-white shadow-lg text-xl py-3   font-arabicFont2 pt-5 pr-4 pl-2 flex flex-col justify-start items-end '>
                <h2 className='text-right font-bold   sm:text-xl  text-lg  '>{e.name} <span className='text-green-500'> ✦ </span></h2>
                <p className='text-[12px] text-right mt-3 text-black/65'> {e.biography.slice(0, 140)}
                  {/* <span onClick={(ev) => {
                    ev.preventDefault()
                    setBio(e.biography);
                    setPerson(e.name);
                    router.push('/layout');
                  }

                  } className='text-green-500 text-lg cursor-pointer hover:text-green-400   '> {'...}
                  </span> */}
                </p>

                <button
                  className='mt-2 px-6 py-[2px] rounded-[6px] text-base text-white bg-green-500 hover:bg-green-600/95  '
                  id={e.id}

                  onClick={(event) => {
                    event.preventDefault()
                    setBio(e.biography);
                    setPerson(e.name);
                    router.push('/layout');
                  }}
                >
                  قراءة
                </button>
              </article>
            )
          }) :
            <div className='mt-2 min-h-[19rem]  '> ...  جاري تحميل البيانات </div>
          }
        </div>
        {/* <DarkModeButton/> */}
        {/* <Footer /> */}

      </main>
    </div>

  )
}
