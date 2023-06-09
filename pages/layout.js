import AppContext from '@/components/AppContext';
import DarkModeButton from '@/components/DarkModeButton';
import Footer from '@/components/Footer';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react';





export default function Layout() {
    const { person, setPerson, bio, setBio } = useContext(AppContext);
    console.log()

    const router = useRouter();

    const handlingRouting = () => {
        router.push('/');
    }

    return (
        <>
        <div className=' relative bg-gray-200/40  font-arabicFont2 font dark:bg-ForBackprimary dark:text-ForTexts min-h-[42rem] '>
            <article >
                <div className=' bg-white dark:bg-ForBackSecondary  h-40 w-full  rounded-b-lg overflow-hidden flex flex-col  items-end  '>
                    <div className=' h-10 w-full  '></div>
                    <div className=' flex justify-between  items-end w-full  mt-6   px-10    '>
                        <button onClick={handlingRouting} className=' rounded-lg bg-green-500 px-10 py-2 text-white hover:bg-green-800/80 '> العودة</button>
                        <div className='flex flex-col justify-start items-end' >
                            <h2 className='  marker:text-center font-black  sm:text-2xl text-lg'> {person}  <span className='text-green-500 pt-2'> ✦ </span>  </h2>
                            <h6 className='mt-2  sm:text-base text-sm     '> كتاب سير أعلام النبلاء</h6>
                        </div>

                    </div>
                </div>
                <div className='sm:px-10 px-3  min-h-[22rem] sm:mt-12  mt-16 '>
                    <p className='mt text-right mt-10 font-lg text-black/85 pb-10 leading-10 '>
                        {bio}
                    </p>
                </div>
              
            </article>
            <Footer/>   
             </div>
         
         </>
    )
}
