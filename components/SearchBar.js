import { use, useContext , useEffect, useRef } from "react";
import AppContext from "./AppContext";


export default function SearchBar({siyar , setSearcheResults , searcheResults }) {
  const { person, setPerson, bio, setBio , valueInput , setValueInput } = useContext(AppContext);
    const refHandler = useRef();
    const handleSubmit = (e) => e.preventDefault();   
    const handleSearchChange = (e) => {

        if(!e.target.value) return setSearcheResults(siyar);
       
        const resultsArray = siyar.filter(sira => sira.name.includes(e.target.value) ) ; 
        setSearcheResults(resultsArray);
        console.log(e.target.value)
    }


    const handlingCancelBtn = () => {
      setSearcheResults(siyar);
      refHandler.current.value = '';      
      
    }
  


  return (
    <>  
        <form   onSubmit={handleSubmit}  >

            
            <input 
            ref={refHandler}
            className="dark:bg-ForBackprimary bg-white text-right text-sm pr-3 font-arabicFont   h-12 w-[20rem]  border-2 dark:border-white/70 border-gray-100   outline-none "
            type="text"
            id="search"
            placeholder="إبحث الأن"
            onChange={handleSearchChange } 
            />

          
        </form>
        { siyar.length >= 5800  ? <button className=' bg-[#21262d] border-2 p-1 border-white cursor-pointer h-12  w-12  '  onClick={handlingCancelBtn}> X</button> :  ' '}
    </>
  )
}
