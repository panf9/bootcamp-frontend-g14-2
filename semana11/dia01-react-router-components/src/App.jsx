import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import ChristopherAcosta from './pages/ChristopherAcosta'

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link href="/"></Link>
          <Link href="/login"></Link>
          <Link href="/prueba"></Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/prueba' element={<ChristopherAcosta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
