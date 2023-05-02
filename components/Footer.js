import Link from "next/link"

export default function Footer() {
  return (
    <footer className='  bg-orange-700 mt-6  font-arabicFont2 '>
        <div className='text-white flex justify-center items-center flex-col pt-5 pb-6  '> 
          <h2 className=' text-base '> 
             API جاهز للمطورين
          </h2>
         <h3 className="p-6 paddingStyle  border-2 rounded-lg ">
         <Link  href={'/'} className=" font-mono  "> API </Link>
         </h3>
         </div>
   </footer>
  )
}
