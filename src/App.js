import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Views/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="p-3">
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path="/about" element={ <Home/> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
