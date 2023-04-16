import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '@/component/AppContext';
import { useRouter } from 'next/router';
import Footer from '@/component/Footer';
import useDarkMode from './useDarkMode';
import Head from 'next/head';





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
  }, []);


  console.log(colorTheme)
  return (
    <div>

      <Head>
        <title>Home</title>
      </Head>
      <main >
        <div className=' bg-orange-800 h-40 flex flex-col justify-center items-center relative  '>
          <h2 className=' font-arabicFont2 text-3xl text-white mt-20  z-10 '> أكثر الشخصيات العربية </h2>
          <div>

            {/*  end of dark mode buttons */}
          </div>
          <div className='mt-10  z-20 '>
            <input
              onInput={(e) => {
                console.log(e.target.value)
              }}
              type='text'
              placeholder='إبحث عن شخصية'
              className=' w-[20rem] outline-none border-2 bg-gray-50 border-orange-600   shadow-xl  h-14 text-right pr-4 rounded-lg  text-xs text-black/75  font-arabicFont  ' />
          </div>
        </div>
        <div className=' mt-20 bg-orange-400 '>

          {/*  dark mode buttons */}
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
              
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
        <div className='flex justify-center items-center  flex-wrap mt-16 '>
          {siyar ? siyar.map((e) => {
            return (
              <article key={e.id} className=' hover:bg-gray-100 cursor-pointer  m-2 rounded-lg bg-white shadow-lg text-xl py-3 sm:w-[23rem] w-[10rem] font-arabicFont2 pt-5 pr-4 pl-2 flex flex-col justify-start items-end '>
                <h2 className='text-right font-bold' >{e.name} <span className='text-orange-700'> ✦ </span></h2>
                <p className='text-[12px] text-right mt-3 text-black/65'> {e.biography.slice(0, 150)}... </p>

                <button
                  className='mt-2 px-6 py-[2px] rounded-[6px] text-base text-white bg-orange-700 hover:bg-orange-800/95  '
                  id={e.id}

                  onClick={(event) => {
                    event.preventDefault()
                    setBio(e.biography);
                    setPerson(e.name);
                    router.push('/Layout');
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

        <Footer />

      </main>
    </div>

  )
}
