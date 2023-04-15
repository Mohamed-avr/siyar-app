import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AppContext from '@/component/AppContext';
import { useRouter } from 'next/router';
import Footer from '@/component/Footer';




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
  }, []);


  return (
    <main className='bg-gray-50'>
      <div className=' bg-orange-800 h-40 flex flex-col justify-center items-center   '>
        <h2 className=' font-arabicFont2 text-3xl text-white mt-20 '> أكثر الشخصيات العربية </h2>
        <div className='mt-10 '>
         
          <input 
          onInput={(e) => {
            console.log(e.target.value())
          }}
          type='text'  
          placeholder='إبحث عن شخصية' 
          className=' w-[20rem] outline-none border-2 bg-gray-50 border-orange-600   shadow-xl  h-14 text-right pr-4 rounded-lg  text-xs text-black/75  font-arabicFont2  ' />
          
        </div>
      </div>
      <div className='flex justify-center items-center flex-wrap mt-16 '>
        {siyar ? siyar.map((e) => {
          return (
            <article id='theDadElement' key={e.id} className='m-2 rounded-lg bg-white shadow-lg text-xl py-3 w-[23rem] font-arabicFont2 pt-5 pr-4 pl-2 flex flex-col justify-start items-end '>
              <h2 className='text-right font-bold' > {e.name}</h2>
              <p className='text-[12px] text-right mt-3 text-black/65'> {e.biography.slice(0, 150)} </p>

              <button
                className='mt-2 px-6 py-[2px] rounded-[6px] text-base text-white bg-orange-700 hover:bg-orange-800/95  '
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
        <div className='mt-2 min-h-[19rem]  '> ...  جاري تحميل البيانات </div>}
      </div>
      <Footer/>
    </main>

  )
}
