interface GeneratingScreenProps {
  progress: number
  title?: string
  subtitle?: string
}

export default function GeneratingScreen({
  progress,
  title = 'Finishing your',
  subtitle = 'Applying your answers and finalising the details',
}: GeneratingScreenProps) {
  return (
    <>
      <div className="gorb" />
      <div>
        <p className="gtitle">{title}<br /><em>app…</em></p>
        <p className="gsub">{subtitle}</p>
      </div>
      <div className="gbar-w">
        <div className="gbar" style={{ width: `${progress}%` }} />
      </div>
    </>
  )
}
