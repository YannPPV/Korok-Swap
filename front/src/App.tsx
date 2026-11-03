import { Route, Routes } from 'react-router'
import Encyclopedia from './views/Encyclopedia.tsx'
import Home from './views/Home.tsx'
import NotFound from './views/NotFound.tsx'
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="encyclopedia" element={<Encyclopedia />} />
    </Routes>
  )
}

export default App
