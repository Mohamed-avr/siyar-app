
export default function SearchBar({siyar , setSearcheResults}) {
    const handleSubmit = (e) => e.preventDefault()
    
    const handleSearchChange = (e) => {

        if(!e.target.value) return setSearcheResults(siyar);
        const resultsArray = siyar.filter(sira => sira.name.includes(e.target.value) )
        setSearcheResults(resultsArray);
        console.log(e.target.value)


        
    }

  return (
    <>  
        <form  onSubmit={handleSubmit}  >
            <input 
            className="dark:bg-ForBackprimary bg-white rounded-3xl text-right text-sm pr-3 font-arabicFont  mt-9 h-12 w-[20rem]  border-2 dark:border-white/70 border-gray-100   outline-none "
            type="text"
            id="search"
            placeholder="إبحث الأن"
           
            onChange={handleSearchChange} 
            />
          
        </form>
    </>
  )
}
