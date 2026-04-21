interface BackButtonProps {
  label?: string
  onClick: () => void
}

export default function BackButton({ label = 'Back', onClick }: BackButtonProps) {
  return (
    <button className="back-btn" onClick={onClick}>
      <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
        <path d="M6 1L1 6L6 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </button>
  )
}
