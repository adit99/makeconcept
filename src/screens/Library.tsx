export default function Library() {
  return (
    <div className="screen on" id="s-lib">
      <div className="hdr" style={{ padding: 'calc(env(safe-area-inset-top,44px) + 16px) 24px 12px', flexShrink: 0 }}>
        <p className="eyebrow">Make.app</p>
        <h1 className="dtitle">Your <em>apps</em></h1>
        <p className="hdr-sub">0 apps · tap to open</p>
      </div>
      <div className="lib-scroll">
        <div className="grid" />
      </div>
    </div>
  )
}
