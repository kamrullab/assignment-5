function TechnologyCard({ technology, isSelected, onAdd }) {
  const { id, name, category, description, icon, rating, difficulty, badge } = technology

  return (
    <article className={`technology-card${isSelected ? ' selected-card' : ''}`}>
      <div className="card-topline">
        <img className="technology-icon" src={icon} alt={`${name} logo`} />
        <span className={`technology-badge badge-${id}`}>{badge}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="technology-details">
        <span className="category-chip">{category}</span>
        <span>{difficulty}</span>
        <span className="rating"><b aria-hidden="true">★</b> {rating}</span>
      </div>
      <button
        className="stack-button"
        type="button"
        disabled={isSelected}
        onClick={() => onAdd(technology)}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  )
}

export default TechnologyCard
