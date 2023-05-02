
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
            className="dark:bg-ForBackprimary  inputStyle font-arabicFont  "
            type="text"
            id="search"
            placeholder="إبحث الأن"
           
            onChange={handleSearchChange} 
            />
          
        </form>
    </header>
  )
}
