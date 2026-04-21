import { useNavigate, useParams } from 'react-router-dom'

export default function Viewer() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  return (
    <div className="screen on" id="s-view">
      <div className="nbar">
        <button className="nbk" onClick={() => navigate('/')}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6L6 11" stroke="#1A1714" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="nai" style={{ background: 'var(--spark)' }} />
        <p className="nan">App</p>
        <button className="nmr" onClick={() => navigate(`/app/${id}/edit`)}>
          <svg width="4" height="16" viewBox="0 0 4 16" fill="none"><circle cx="2" cy="2" r="1.5" fill="#4A4540" /><circle cx="2" cy="8" r="1.5" fill="#4A4540" /><circle cx="2" cy="14" r="1.5" fill="#4A4540" /></svg>
        </button>
      </div>
      <div className="vbody">
        <button className="efab" onClick={() => navigate(`/app/${id}/edit`)}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13 2L16 5L6 15L2 16L3 12L13 2Z" stroke="#FAF8F3" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" /></svg>
        </button>
      </div>
    </div>
  )
}
