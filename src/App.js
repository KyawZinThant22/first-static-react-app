import Info from "./components/info";
import Img from "./components/img";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/footer";
import "./style.css"

function App() {
  return (
    <div className="container">
        <Img></Img>
        <div className="s-container">
            <Info></Info>
            <About></About>
            <Interest></Interest>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
