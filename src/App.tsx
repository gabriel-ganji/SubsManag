import './App.css'
import Main from './components/main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Services from './components/services'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App
