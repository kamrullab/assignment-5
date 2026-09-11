function StackPanel({ selectedTechnologies, onRemove, onRemoveAll }) {
  const selectedCount = selectedTechnologies.length
  const countLabel = selectedCount === 1 ? 'Technology Selected' : 'Technologies Selected'

  return (
    <aside className="stack-panel" aria-labelledby="stack-title">
      <h3 id="stack-title">Your Stack</h3>
      <p className="selected-count">
        {selectedCount === 0 ? 'No technologies selected yet.' : `${selectedCount} ${countLabel}`}
      </p>

      {selectedCount === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <>
          <div className="selected-list">
            {selectedTechnologies.map((technology) => (
              <div className="selected-item" key={technology.id}>
                <img src={technology.icon} alt="" />
                <div>
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${technology.name}`}
                  onClick={() => onRemove(technology.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <button className="remove-all-button" type="button" onClick={onRemoveAll}>
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default StackPanel
