import Registraton from "./components/pagescomponent/registration";
import Homepage from "./components/pagescomponent/homepage";
import Footer from "./components/reusablecomponents/footer";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Homepage/>
      {/* <Registraton/> */}
      <Footer/>
    </div>
  );
}

export default App;
