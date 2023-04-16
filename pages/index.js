import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '@/pages/AppContext';
import { useRouter } from 'next/router';
import Footer from '@/component/Footer';
import Image from 'next/image';




export default function Home() {

  const { person, setPerson, bio, setBio } = useContext(AppContext);
  const [siyar, setSiyar] = useState();
  const router = useRouter();


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
    
    <main className='bg-gray-50'>
      <div className=' bg-orange-800 h-40 flex flex-col justify-center items-center relative  '>
        <h2 className=' font-arabicFont2 text-3xl text-white mt-20  z-10 '> أكثر الشخصيات العربية </h2>
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

      <div className='flex justify-center items-center  flex-wrap mt-16 '>
        {siyar ? siyar.map((e) => {
          return (
            <article id='theDadElement' key={e.id} className=' hover:bg-gray-100 cursor-pointer  m-2 rounded-lg bg-white shadow-lg text-xl py-3 sm:w-[23rem] w-[10rem] font-arabicFont2 pt-5 pr-4 pl-2 flex flex-col justify-start items-end '>
              <h2 className='text-right font-bold' >{e.name} <span className='text-orange-700'> ✦ </span></h2>
              <p className='text-[12px] text-right mt-3 text-black/65'> {e.biography.slice(0, 150)} </p>

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

  )
}
