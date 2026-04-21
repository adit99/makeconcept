import { useEffect, useRef } from 'react'
import type { AppEntry } from '../types'

interface MiniAppFrameProps {
  html: string
  entries: AppEntry[]
  onSaveEntry: (data: object) => void
  onDeleteEntry: (id: string) => void
}

export default function MiniAppFrame({ html, entries, onSaveEntry, onDeleteEntry }: MiniAppFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handler = (event: MessageEvent<string>) => {
      try {
        const msg = JSON.parse(event.data) as { type: string; payload?: object; id?: string }
        if (msg.type === 'SAVE_ENTRY' && msg.payload) onSaveEntry(msg.payload)
        if (msg.type === 'DELETE_ENTRY' && msg.id) onDeleteEntry(msg.id)
      } catch {
        // ignore non-JSON messages
      }
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [onSaveEntry, onDeleteEntry])

  const onLoad = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ type: 'LOAD_DATA', payload: entries.map(e => JSON.parse(e.data)) }),
      '*',
    )
  }

  const blob = new Blob([html], { type: 'text/html' })
  const src = URL.createObjectURL(blob)

  return (
    <iframe
      ref={iframeRef}
      src={src}
      sandbox="allow-scripts allow-same-origin"
      onLoad={onLoad}
      title="Mini app"
    />
  )
}
