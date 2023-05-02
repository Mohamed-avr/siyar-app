
import CardPerson from './CardPerson';
import EmptyMatching from './EmptyMatching';




export default function ListPage(props) {

    console.log(props.sendResults , 'this is search resiults - ListPage component' )
    const results = props.sendResults.map(e=>   <CardPerson key={e.id} sendName={e.name} sendBio={e.biography} />);
    const content = results?.length ? results : <EmptyMatching/> ;

    
  return (
    <main className='flex justify-center items-center  flex-wrap mt-16  '> 
         {content} 
   </main>
  )
}
