import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pagelayout from './components/layout/PageLayout';
import Navbar from './components/Navbar';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Pagelayout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="services" element={<Services />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
