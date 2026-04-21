interface FABProps {
  label: string
  onClick: () => void
}

export default function FAB({ label, onClick }: FABProps) {
  return (
    <button className="fab" onClick={onClick}>
      <span className="fab-dot" />
      {label}
    </button>
  )
}
