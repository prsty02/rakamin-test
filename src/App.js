import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Views/Contact";
import Home from "./Views/Home";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Header />
        <div className="p-3 h-5/6">
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/about" element={ <Home/> } />
            <Route exact path="/contact" element={ <Contact/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
