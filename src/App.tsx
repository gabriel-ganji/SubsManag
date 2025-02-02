import { useEffect } from "react";
import Main from "./components/main";
import Services from "./components/services";
import Service from "./components/services/service";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  useEffect(() => {
    const enterFullScreen = (): void => {
      const elem: HTMLElement = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    };
    enterFullScreen();
  }, []);

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

export default App
