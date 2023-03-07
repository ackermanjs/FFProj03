import './App.css';
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "./components/TopNav";
import Header from "./components/Header";
import HeroSection from './pages/HeroSection';
import BodyMid from './pages/BodyMid'
import Body from "./pages/Body";
import Footer from "./components/Footer";
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';

// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Dogs />
      <Cats />
      <BodyMid />
      <Body />
      <Footer />
    </div>
  );
}

export default App;