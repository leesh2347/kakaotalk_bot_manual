import { useState } from 'react'

export function useCommandSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  
  return { searchQuery, setSearchQuery }
}

export default useCommandSearch
