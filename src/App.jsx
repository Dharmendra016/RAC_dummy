import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from "./Components/Routers/Routers"
import Navbar from './Components/NavBar/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routers></Routers>
      </Router>
    </div>
  )
}

export default App
