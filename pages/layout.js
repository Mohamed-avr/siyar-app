import AppContext from '@/pages/AppContext';
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
        <div className=' bg-gray-200/40  font-arabicFont2 font '>
            <article >
                <div className=' bg-white h-40 w-full  rounded-b-lg overflow-hidden flex flex-col  items-end  '>
                    <div className=' h-10 w-full  '></div>
                    <div className=' flex justify-between  items-start w-full  mt-6   px-10  '>
                        <button onClick={handlingRouting} className=' rounded-lg bg-orange-700 px-10 py-2 text-white hover:bg-orange-800/80  '> العودة</button>
                        <div className='flex flex-col justify-start items-end' >
                            <h2 className=' text-3xl  marker:text-center font-black '> {person} </h2>
                            <h6 className='mt-2  '> كتاب سير أعلام النبلاء</h6>
                        </div>

                    </div>
                </div>
                <div className='sm:px-10 px-3'>
                    <p className='mt text-right mt-10 font-lg text-black/85 pb-10  '>
                        {bio}
                    </p>
                </div>
            </article>
        </div>
    )
}
