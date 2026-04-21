import { useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate = useNavigate()
  return (
    <div className="screen on" id="s-create">
      <div className="hdr" style={{ padding: 'calc(env(safe-area-inset-top,44px) + 10px) 24px 16px', flexShrink: 0 }}>
        <button className="back-btn" onClick={() => navigate('/')}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Library
        </button>
        <h1 className="dtitle">What should<br />we <em>make?</em></h1>
      </div>
      <div className="cscroll">
        <div className="icard">
          <textarea className="cta" placeholder="Describe the app you need…" />
          <div className="iftr">
            <button className="vbtn">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><rect x="4" y="0" width="6" height="11" rx="3" fill="currentColor" /><path d="M1 8C1 11.314 3.686 14 7 14C10.314 14 13 11.314 13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><line x1="7" y1="14" x2="7" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><line x1="4.5" y1="17" x2="9.5" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </button>
            <span className="chint">0 / 300</span>
          </div>
        </div>
        <div>
          <p className="slbl">Ideas</p>
          <div className="crow">
            {['Daily habit tracker', 'Grocery list', 'Workout log', 'Bill splitter', 'Water intake', 'Mood journal', 'Reading tracker'].map(s => (
              <button key={s} className="chip">{s}</button>
            ))}
          </div>
        </div>
        <button className="mkbtn" onClick={() => navigate('/plan')}>
          <span className="mkbtn-dot" />
          Make it
        </button>
      </div>
    </div>
  )
}
