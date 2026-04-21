import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  return (
    <div className="screen on" id="s-edit">
      <div className="hdr" style={{ padding: 'calc(env(safe-area-inset-top,44px) + 10px) 24px 16px', flexShrink: 0 }}>
        <button className="back-btn" onClick={() => navigate(`/app/${id}`)}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none"><path d="M6 1L1 6L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          App
        </button>
        <h1 className="dtitle">How should we<br /><em>improve it?</em></h1>
      </div>
      <div className="cscroll">
        <div className="ectx">
          <div className="eai" style={{ background: 'var(--spark)' }} />
          <div style={{ flex: 1 }}>
            <p className="eanm">App</p>
            <p className="eah">Last edited just now</p>
          </div>
          <button className="hbtn">History</button>
        </div>
        <div className="icard">
          <textarea className="cta" placeholder="What would you like to change?" />
          <div className="iftr">
            <button className="vbtn">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none"><rect x="4" y="0" width="6" height="11" rx="3" fill="currentColor" /><path d="M1 8C1 11.314 3.686 14 7 14C10.314 14 13 11.314 13 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><line x1="7" y1="14" x2="7" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><line x1="4.5" y1="17" x2="9.5" y2="17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </button>
            <span className="chint">0 / 300</span>
          </div>
        </div>
        <div>
          <p className="slbl">Quick edits</p>
          <div className="crow">
            {['Add reminders', 'Change color', 'Add categories', 'Show stats', 'Simplify layout'].map(s => (
              <button key={s} className="chip">{s}</button>
            ))}
          </div>
        </div>
        <button className="mkbtn">
          <span className="mkbtn-dot" />
          Update app
        </button>
      </div>
    </div>
  )
}
