import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import StackPanel from './StackPanel.jsx'
import TechnologyCard from './TechnologyCard.jsx'

function TechnologySection() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedTechnologies, setSelectedTechnologies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load the technology list.')
        }
        return response.json()
      })
      .then((data) => setTechnologies(data))
      .catch((loadError) => setError(loadError.message))
      .finally(() => setLoading(false))
  }, [])

  const addToStack = (technology) => {
    const alreadySelected = selectedTechnologies.some((item) => item.id === technology.id)

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelectedTechnologies([...selectedTechnologies, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (technologyId) => {
    const technology = selectedTechnologies.find((item) => item.id === technologyId)
    setSelectedTechnologies(
      selectedTechnologies.filter((item) => item.id !== technologyId),
    )
    toast.info(`${technology.name} removed from your stack.`)
  }

  const removeAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning('Your stack is already empty.')
      return
    }

    setSelectedTechnologies([])
    toast.info('All technologies removed from your stack.')
  }

  const categories = ['All', ...new Set(technologies.map((item) => item.category))]
  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredTechnologies = technologies.filter((technology) => {
    const matchesCategory =
      selectedCategory === 'All' || technology.category === selectedCategory
    const matchesSearch =
      technology.name.toLowerCase().includes(normalizedSearch) ||
      technology.description.toLowerCase().includes(normalizedSearch) ||
      technology.badge.toLowerCase().includes(normalizedSearch)

    return matchesCategory && matchesSearch
  })

  return (
    <section className="technologies-section container" id="technologies">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick the right technologies to build your ideal stack.</p>
      </div>

      <div className="technology-filters" aria-label="Technology filters">
        <label className="search-field">
          <span className="sr-only">Search technologies</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search technologies..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>

        <label className="category-field">
          <span className="sr-only">Filter by category</span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'All' ? 'All categories' : category}
              </option>
            ))}
          </select>
        </label>
      </div>

      {loading && (
        <div className="loading-state" role="status">
          <span className="spinner" aria-hidden="true" />
          Loading technologies...
        </div>
      )}

      {error && <p className="error-state" role="alert">{error}</p>}

      {!loading && !error && (
        <div className="technologies-layout">
          {filteredTechnologies.length > 0 ? (
            <div className="technology-grid">
              {filteredTechnologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={selectedTechnologies.some((item) => item.id === technology.id)}
                  onAdd={addToStack}
                />
              ))}
            </div>
          ) : (
            <div className="no-results" role="status">
              <strong>No technologies found</strong>
              <span>Try another name or category.</span>
            </div>
          )}
          <StackPanel
            selectedTechnologies={selectedTechnologies}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      )}
    </section>
  )
}

export default TechnologySection
