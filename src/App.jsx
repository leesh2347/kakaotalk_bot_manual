import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Maple from './pages/Maple'
import LostArk from './pages/LostArk'
import Misc from './pages/Misc'
import Fun from './pages/Fun'
import Pok from './pages/Pok'

function App() {
  return (
    <BrowserRouter basename="/kakaotalk_bot_manual">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="maple" element={<Maple />} />
          <Route path="lostark" element={<LostArk />} />
          <Route path="misc" element={<Misc />} />
          <Route path="fun" element={<Fun />} />
          <Route path="pok" element={<Pok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
