import { use, useContext } from "react";
import AppContext from "./AppContext";
import { useRouter } from "next/router";



export default function CardPerson(props) {
    const { person, setPerson, bio, setBio } = useContext(AppContext);
    const router = useRouter();

  return (
    <>
    <article key={props.id} className=' hover:bg-gray-100   dark:bg-ForBackSecondary  sm:w-[26rem] w-[22rem] m-2 rounded-lg bg-white shadow-lg text-xl py-3   font-arabicFont2 pt-5 pr-4 pl-2 flex flex-col justify-start items-end '>
                <h2 className='text-right font-bold   sm:text-[22px]  text-lg  '>{props.sendName} <span className='text-green-500'> ✦ </span></h2>
                <p className='text-[14px] text-right mt-3 text-black/65'> {props.sendBio.slice(0, 140)}
                </p>

                <button
                  className='mt-2 px-6 py-[2px] rounded-[6px] text-base text-white bg-green-500 hover:bg-green-600/95  '
                  id={props.id}
                  onClick={(event) => {
                    event.preventDefault()
                    setBio(props.sendBio);
                    setPerson(props.sendName);
                    router.push('/layout');
                  }}
                >
                  قراءة
                </button>
              </article></>
  )
}
