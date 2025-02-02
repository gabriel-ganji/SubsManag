import Main from "./components/main";
import Services from "./components/services";
import Service from "./components/services/service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;