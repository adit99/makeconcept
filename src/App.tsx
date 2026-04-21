import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Library from './screens/Library'
import Create from './screens/Create'
import Plan from './screens/Plan'
import Generating from './screens/Generating'
import Viewer from './screens/Viewer'
import Edit from './screens/Edit'

function TabBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const hidden = pathname.startsWith('/app/') || pathname === '/plan' || pathname === '/generating'
  if (hidden) return null

  return (
    <nav className="tbar">
      <button
        className={`ti-tab${pathname === '/' ? ' ton' : ''}`}
        onClick={() => navigate('/')}
      >
        <span className="ti-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="2" y="2" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="12" y="2" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2" y="12" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
            <rect x="12" y="12" width="8" height="8" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        <span className="ti-lbl">Library</span>
      </button>

      <button
        className={`ti-tab${pathname === '/create' ? ' ton' : ''}`}
        onClick={() => navigate('/create')}
      >
        <span className="ti-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
            <line x1="11" y1="7" x2="11" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="7" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <span className="ti-lbl">Make</span>
      </button>

      <button className="ti-tab">
        <span className="ti-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 2V4M11 18V20M2 11H4M18 11H20M4.93 4.93L6.34 6.34M15.66 15.66L17.07 17.07M4.93 17.07L6.34 15.66M15.66 6.34L17.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <span className="ti-lbl">Settings</span>
      </button>
    </nav>
  )
}

function Shell() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/create" element={<Create />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/generating" element={<Generating />} />
        <Route path="/app/:id" element={<Viewer />} />
        <Route path="/app/:id/edit" element={<Edit />} />
      </Routes>
      <TabBar />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}
