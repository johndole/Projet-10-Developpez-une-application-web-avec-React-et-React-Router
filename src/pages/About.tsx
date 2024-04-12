import Dropdown from "../components/Dropdown";

function About(){

    return (
        
        <div style={{margin: "30px 100px 30px 100px"}}>
            <div className="home-hero">
                <h2 className="home-title"></h2>
                <img className="hero-img" src="/src/assets/hero-img.jpg" alt="logo"/>

            </div>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center", margin: "50px 0"}}>
                <Dropdown title="Fiabilité" content={<p>Lorem ipsum dolor sit amet</p>} style={{width: "80%"}} />
                <Dropdown title="Respect" content={<p>Lorem ipsum dolor sit amet</p>} style={{width: "80%"}}  />
                <Dropdown title="Service" content={<p>Lorem ipsum dolor sit amet</p>} style={{width: "80%"}}  />
                <Dropdown title="Sécurité" content={<p>Lorem ipsum dolor sit amet</p>} style={{width: "80%"}}  />
            </div>
        </div>
    )
}

export default About