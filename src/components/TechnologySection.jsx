import { useEffect, useState } from 'react'
import TechnologyCard from './TechnologyCard.jsx'

function TechnologySection() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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
        <div className="technology-grid">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </div>
      )}
    </section>
  )
}

export default TechnologySection
