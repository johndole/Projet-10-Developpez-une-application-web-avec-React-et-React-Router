import { useParams } from "react-router-dom";
import "../styles/FlatPage.css";
import Dropdown from "../components/Dropdown";
import HostInfo from "../components/HostInfo";
import Carousel from "../components/Carousel"; // Import the Carousel component
import flatsData from "../data/logements.json";
import Tags from "../components/Tags";
import NotFound from "./NotFound";

function FlatPage() {
  const { id } = useParams<{ id: string }>();
  const flat = flatsData.find((flat) => flat.id === id);

  if (!flat) {
    return <NotFound />;
  }

  return (
    <div className="flat__container">
      {/* Render the Carousel component with the flat's pictures */}
      <Carousel pictures={flat.pictures} />

      <div className="flat-profile__container">
        <div className="flat-profile">
          <h3>{flat.title}</h3>
          <p>{flat.location}</p>
          <Tags tags={flat.tags} />
        </div>
        <HostInfo
          name={flat.host.name}
          picture={flat.host.picture}
          rating={parseInt(flat.rating)}
        />
      </div>
      <div className="flat-details__container">
        {/* Dropdown for equipment */}
        <Dropdown
          title="Equipments"
          content={flat.equipments.map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        />
        {/* Dropdown for description */}
        <Dropdown title="Description" content={<p>{flat.description}</p>} />
      </div>
    </div>
  );
}

export default FlatPage;
