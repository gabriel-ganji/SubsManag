import './App.css'
import Main from './components/main'
import Services from './components/services'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Service from './components/services/service'

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

export default App
