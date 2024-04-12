import '../styles/FlatCard.css'


interface FlatCardProps {
    id: string;
    title: string;
    cover: string;
  }
  
  const FlatCard: React.FC<FlatCardProps> = ({ id, title, cover }) => {

    const handleClick = () => {
      // Redirect to the specific URL when clicked
      window.location.href = `/flat/${id}`;
    };
    return (
      <div key={id} className="flat-card" onClick={handleClick}>
        <div className="flat-card__cover">
          <img src={cover} alt={title} />
        </div>
        <div className="flat-card__title">
          <h3>{title}</h3>
        </div>
      </div>
    );
  };

export default FlatCard