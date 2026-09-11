import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import StackPanel from './StackPanel.jsx'
import TechnologyCard from './TechnologyCard.jsx'

function TechnologySection() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedTechnologies, setSelectedTechnologies] = useState([])

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

  return (
    <section className="technologies-section container" id="technologies">
      <div className="section-heading">
        <h2>Explore the <span>Technologies</span></h2>
        <p>Pick the right technologies to build your ideal stack.</p>
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
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={selectedTechnologies.some((item) => item.id === technology.id)}
                onAdd={addToStack}
              />
            ))}
          </div>
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
