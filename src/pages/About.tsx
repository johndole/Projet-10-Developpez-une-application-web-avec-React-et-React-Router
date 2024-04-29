import Dropdown from "../components/Dropdown";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="home-hero">
        <img className="hero-img" src="/src/assets/hero-img.jpg" alt="logo" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px 0",
        }}
      >
        <Dropdown
          title="Fiabilité"
          content={<p>Lorem ipsum dolor sit amet</p>}
          style={{ width: "80%" }}
        />
        <Dropdown
          title="Respect"
          content={<p>Lorem ipsum dolor sit amet</p>}
          style={{ width: "80%" }}
        />
        <Dropdown
          title="Service"
          content={<p>Lorem ipsum dolor sit amet</p>}
          style={{ width: "80%" }}
        />
        <Dropdown
          title="Sécurité"
          content={<p>Lorem ipsum dolor sit amet</p>}
          style={{ width: "80%" }}
        />
      </div>
    </div>
  );
}

export default About;
