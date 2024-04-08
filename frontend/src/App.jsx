import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className='h-screen'>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
