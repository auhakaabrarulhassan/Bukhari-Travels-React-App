import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Prayerbar from "./Components/Prayerbar";
import Homebooking from "./Components/Homebooking";
import Umrahhpackages from "./Components/Umrahhpackages";
import Pilgrimguidance from "./Pilgrimguidance";
import Pilgrimreviews from "./Pilgrimreviews";

function App() {
  let numbers = ["Abrar ", "Haseeb ", "Ahmad"];
  return (
    <div className="App">
      <Prayerbar></Prayerbar>
      <Header></Header>
      <Homebooking></Homebooking>
      <Umrahhpackages></Umrahhpackages>
      <Pilgrimguidance></Pilgrimguidance>
      <Pilgrimreviews></Pilgrimreviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
