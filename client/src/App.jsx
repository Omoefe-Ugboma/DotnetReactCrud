import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Person from './components/person/Person'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>

        <Route index element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="person" element={<Person />}/>
        <Route path="*" element={<NotFound />}/>
     
      </Routes>

    </>
  )
}

export default App