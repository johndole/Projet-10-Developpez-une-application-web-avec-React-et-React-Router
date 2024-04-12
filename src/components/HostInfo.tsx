import Rating from './Rating'
import '../styles/HostInfo.css'

const HostInfo = ({  picture,name, rating }: any) => {
    const [firstName, lastName] = name.split(" ");
  return (
    <div className="flat-host__container">
    <div className="flat-host">
      <p className="flat-host__name"> 
      {firstName}<br />
      {lastName}
      </p>
      <img className="flat-host__picture" src={picture} alt={name} />
    </div>
    <Rating value={parseInt(rating)} />
  </div>
  );
};

export default HostInfo;
