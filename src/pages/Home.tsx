import '../styles/Home.css'
import FlatList from '../components/FlatList'

function Home () {

    return (
        <div className="home">
            
            <div className="home-hero">
                <h2 className="home-title">Chez vous, partout et ailleurs</h2>
                <img className="hero-img" src="/src/assets/hero-img.jpg" alt="logo"/>
            </div>
            <div className='flat-cards__container'>
            <FlatList/>
            </div>
        </div>
    )
}

export default Home