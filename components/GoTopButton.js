import { useEffect, useState } from "react"


export default function GoTopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setShowButton(currentScrollPos > 0);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
        { 
         showButton
         && 
        <button  
        onClick={handleClick}
        className={ showButton ? 'fixed  text-white dark:bg-green-700 flex justify-center items-center flex-col  bg-ForBackprimary p-2 rounded-xl    z-20 left-3  bottom-4 ': 'hidden  text-white dark:bg-green-700  bg-ForBackprimary p-2 rounded-xl    z-20 left-5  bottom-4 '  }>
            <img className='w-6 h-6' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAxElEQVR4nO3XTQrCMBRF4eBAdLfOXJiD2s15REQo2lBb83Of3AMZZZKPRwYvJeecc845Fzbg8DgpcsAeuAAjcEzBEa/iYfhExMPw/BMD+Qb5P8P8JM7ACbiFmAwZxOReH8MCIgSGLxHSGFYiJDFsREhh+BEhgaEQoiuGwoguGCohmmKojGiCoRGiKobGiCqYXoiimN6IIhgVxE8YNcQmjCpiNWYGIoPIYMbsyjzByCHeMNfFvR/YJfEI8EbnnHPOufRH3QEEO8YvyMQIUAAAAABJRU5ErkJggg=="></img>
            <div className=' font-arabicFont text-xs   '>
                صعود
            </div>
        </button>
        }
       </>
    )
}
