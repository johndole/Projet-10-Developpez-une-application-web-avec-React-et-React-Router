
import Header from './src/layers/Header'
import Body from './src/pages/Home'
import Footer from './src/layers/Footer'
import FlatPage from './src/pages/FlatPage'
import About from './src/pages/About'
import NotFound from './src/pages/NotFound'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> {/* Render Body component for the root path */}
          <Route path="/flat/:id" element={<FlatPage />} /> {/* Render FlatPage component for /flat/:id */}
          <Route path="/a-propos" element={<About />} /> {/* Render Body component for /a-propos */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  
  );
}

export default App
