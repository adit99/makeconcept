import type { MiniApp } from '../types'

interface AppTileProps {
  app: MiniApp
  onClick: () => void
  className?: string
}

export default function AppTile({ app, onClick, className = '' }: AppTileProps) {
  return (
    <div className={`tile ${app.color} ${className}`} onClick={onClick}>
      <div className="ti">{app.icon}</div>
      <div>
        <p className="tn">{app.name}</p>
        <p className="tt">just now</p>
      </div>
    </div>
  )
}
