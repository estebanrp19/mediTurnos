import './reset.css'
import { Navbar } from './components/Navbar'
import { Home } from './views/Home'
import { MisTurnos } from './views/MisTurnos'
import Register from './views/Register'
import Login from './views/Login'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from './views/ErrorPage'
import AddTurn from './views/AddTurn'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/turns" element={<MisTurnos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addturn" element={ <AddTurn /> } />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App
