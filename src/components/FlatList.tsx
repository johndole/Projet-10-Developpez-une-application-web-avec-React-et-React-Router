import FlatData from '../data/logements.json';
import FlatCard from './FlatCard';


const FlatList = () =>{
  
    return (
        <div className="flat-list">
            {FlatData.map(({ id, cover, title }) => (
                <FlatCard
                    key={id}
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
        </div>
    );
}

export default FlatList;


  
