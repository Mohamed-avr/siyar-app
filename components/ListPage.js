import { useContext } from 'react';
import AppContext from './AppContext';
import CardPerson from './CardPerson';
import EmptyMatching from './EmptyMatching';





export default function ListPage(props) {
  const { person, setPerson, bio, setBio , cancelResults , setCancelResults } = useContext(AppContext);

  
    const results = props.sendResults.map(e=>   <CardPerson key={e.id} sendName={e.name} sendBio={e.biography} />);
    const content = results?.length ? results : <EmptyMatching/> ;

    
  return (
    <div className='flex justify-center items-center  flex-wrap mt-16  '> 
         {content} 
   </div>
  )
}
