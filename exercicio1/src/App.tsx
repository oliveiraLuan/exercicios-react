import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Promo from "./routes/Promo";
import Subscribe from "./routes/Subscribe";
import HomeContent from "./routes/HomeContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeContent/>}/>
          <Route path="/promo" element={<Promo />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
