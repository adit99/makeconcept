import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Library from './screens/Library'
import Create from './screens/Create'
import Plan from './screens/Plan'
import Generating from './screens/Generating'
import Viewer from './screens/Viewer'
import Edit from './screens/Edit'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/create" element={<Create />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/generating" element={<Generating />} />
        <Route path="/app/:id" element={<Viewer />} />
        <Route path="/app/:id/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}
