import { useEffect, useState , useContext  } from 'react'
import axios from 'axios'
import AppContext from '@/component/appContext';
import { useRouter } from 'next/router';




export default function Home() {

  const {  info , setInfo } = useContext(AppContext);
  const [siyar, setSiyar] = useState();
  console.log(info + "these are info")
  
  useEffect(() => {
    axios.get('https://siyaar.onrender.com/siayr').then(function (res) 
      {
        console.log(siyar)
         setSiyar(res.data)
         console.log(siyar)
  
      }).catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [siyar]);

  //handling routing 
  const router = useRouter();
  const handlingRouting = () => {
     router.push('/layout');
     console.log('clicked')

  }

  // handling sending data
  const handlingData = (namePerson , bioPerson ) => {
    setInfo({"name":namePerson , "bio":bioPerson})
    handlingRouting()
  }


  return (
 
    <div className='flex justify-center items-center flex-wrap'>
      { siyar ?  siyar.map( (e) => {
       return(
        <article  key={e.id} className='m-2 bg-white shadow-lg text-xl py-3 w-[23rem] font-arabicFont2 pt-5 pr-4 pl-2 flex flex-col justify-start items-end '> 
         <h2 className='text-right font-bold' > {e.name}</h2>
         <p className='text-[14px] text-right mt-3'> {e.biography.slice(0,100)} </p>
         <button  className='mt-2 px-6 py-1 rounded-lg bg-orange-800 hover:bg-orange-800/95 text-white ' onClick={handlingData(e.name, e.biography)}>
             قراءة
         </button>
       </article>
       )
      })  : <div> جاري تحميل البيانات ... </div>}
    </div>
    
  )
}
