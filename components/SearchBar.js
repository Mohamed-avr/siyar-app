
export default function SearchBar({siyar , setSearcheResults}) {
    const handleSubmit = (e) => e.preventDefault()
    
    const handleSearchChange = (e) => {

        if(!e.target.value) return setSearcheResults(siyar);
        const resultsArray = siyar.filter(sira => sira.name.includes(e.target.value) )
        setSearcheResults(resultsArray);
        console.log(e.target.value)


        
    }

  return (
    <header>  
        <form  onSubmit={handleSubmit}  >
            <input 
            className="dark:bg-ForBackprimary    rounded-xl text-right pr-2 font-arabicFont  mt-10 h-12 w-[20rem]  border-2 dark:border-white/70 border-[#21a753]/80  outline-none "
            type="text"
            id="search"
            placeholder="إبحث الأن"
           
            onChange={handleSearchChange} 
            />
          
        </form>
    </header>
  )
}
