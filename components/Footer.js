import Link from "next/link"

export default function Footer() {
  return (
    <footer className='  shadow-xl  bg-gray-100 dark:bg-ForBackSecondary mt-6 font-arabicFont '>
        <div className=' dark:text-white text-black flex justify-center items-center flex-col pt-5 pb-6  space-y-4'> 
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


//  ForBackprimary: '#0d1117',
//  ForBackSecondary: '#161b22',