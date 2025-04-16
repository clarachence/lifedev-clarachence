import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pager/Register/Register'
import './App.css'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" elemnte={<Home />} />
              <Route path="/login" elemnte={<Login />} />
              <Route path="/register" elemnte={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
