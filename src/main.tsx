import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { RepositoryProvider } from './context/RepositoryContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RepositoryProvider>
      <App />
    </RepositoryProvider>
  </StrictMode>,
)
