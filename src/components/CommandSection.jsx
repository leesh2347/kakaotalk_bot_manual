import { useState } from 'react'

function CommandSection({ title, children, searchQuery }) {
  const [isOpen, setIsOpen] = useState(false)

  // Check if title or children content matches the search query
  const matchesSearch = (title, children) => {
    if (!searchQuery || searchQuery.trim() === '') return true
    
    const query = searchQuery.toLowerCase()
    const titleMatch = title.toLowerCase().includes(query)
    
    // Search within children content - extract text from React elements
    const extractText = (element) => {
      if (!element) return ''
      if (typeof element === 'string') return element.toLowerCase()
      if (Array.isArray(element)) return element.map(extractText).join(' ')
      if (element.props?.children) {
        return extractText(element.props.children)
      }
      return ''
    }
    
    const childrenText = extractText(children)
    const contentMatch = childrenText.includes(query)
    
    return titleMatch || contentMatch
  }

  const isVisible = matchesSearch(title, children)

  if (!isVisible) {
    return null
  }

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
