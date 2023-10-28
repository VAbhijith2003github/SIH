import Homepage from "./components/pagescomponent/homepage";
import Login from "./components/pagescomponent/login";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./styles.css";

function App() {
  return (
  <>
  <Router>
  <Routes>
    <Route exact path = "/" element={<Homepage/>}/>
    <Route exact path = "/login" element={<Login/>}/>
    {/* <Route exact path = "/register" element={<Register/>}/> */}
    <Route/>
    <Route/>
  </Routes>
  </Router>
  </>
  )
}

export default App;
