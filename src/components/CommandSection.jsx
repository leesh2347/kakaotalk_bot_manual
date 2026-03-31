import { useState } from 'react'

function CommandSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="command-section">
      <button 
        className="command-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>▶ {title}</span>
        <span className={`command-toggle ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      <div className={`command-content ${isOpen ? 'show' : ''}`}>
        {children}
      </div>
    </section>
  )
}

export default CommandSection
