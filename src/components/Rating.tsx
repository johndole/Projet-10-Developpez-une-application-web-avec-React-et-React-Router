import '../styles/Rating.css'
import { BsStarFill } from "react-icons/bs";


const Rating = ({ value }: { value: number }) => {
    const stars = [];
  
    // Fill stars array based on the value
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= value ? 'filled' : 'empty'}>
          <BsStarFill />
        </span>
      );
    }
  
    return <div className="rating">{stars}</div>;
  };
  
  export default Rating;