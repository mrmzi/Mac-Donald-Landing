import "./App.css";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import MobileApp from "./Components/MobileApp/MobileApp";
import Navbar from "./Components/Navbar/Navbar";
import Saleoff from "./Components/SaleOff/Saleoff";
import Search from "./Components/Search/Search";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  return (
   <>
    <Navbar />
    <Welcome />
    <Menu />
    <Saleoff />
    <MobileApp />
    <Search />
    <Footer />
   </>
  );
}

export default App;
