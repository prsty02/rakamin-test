import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Views/About";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Product from "./Views/Product";

function App() {
  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Header />
        <div className="p-3 h-5/6">
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/about" element={ <About/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path="/product/:id" element={ <Product/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
