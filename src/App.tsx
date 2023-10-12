import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MenuSelection from './pages/MenuSelection'
import MenuEnglish1 from './pages/MenuEnglish1'
import MenuEnglish2 from './pages/MenuEnglish2'
import MenuSpanish1 from './pages/MenuSpanish1'
import MenuSpanish2 from './pages/MenuSpanish2'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage  />}/>
      <Route path="/menu-selection" element={<MenuSelection />}/>
      <Route path="/menu/english-1" element={<MenuEnglish1 />}/>
      <Route path="/menu/english-2" element={<MenuEnglish2 />}/>
      <Route path="/menu/spanish-1" element={<MenuSpanish1 />}/>
      <Route path="/menu/spanish-2" element={<MenuSpanish2 />}/> 

      <Route path="*" element={<h1>Woops, we forgot to turn left in Albuquerque</h1>}/>
    </Routes>
  </>
  )
}

export default App
