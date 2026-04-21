import { useNavigate } from 'react-router-dom'

export default function Plan() {
  const navigate = useNavigate()
  return (
    <div className="screen on" id="s-plan">
      <div className="plhdr" style={{ padding: 'calc(env(safe-area-inset-top,44px) + 10px) 20px 0', flexShrink: 0 }}>
        <button className="back-btn" style={{ marginBottom: 0 }} onClick={() => navigate('/create')}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back
        </button>
      </div>
      <div className="gind">
        <div className="gorb-sm" />
        <div className="gind-txt">
          <p className="gind-lbl">Building in the background…</p>
          <p className="gind-sub">Answering helps make it better</p>
        </div>
        <div className="gbar-mini"><div className="gbar-mini-fill" /></div>
      </div>
      <div className="pchat" />
      <div className="pftr">
        <button className="fnbtn" onClick={() => navigate('/generating')}>
          Looks good — finish it
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M8 2L13 7L8 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <button className="skbtn" onClick={() => navigate('/generating')}>Skip and build now</button>
      </div>
    </div>
  )
}
