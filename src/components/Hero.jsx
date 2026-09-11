function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <h1>
          Build Your Ideal
          <span>Development Stack</span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#technologies">
            Explore Technologies
          </a>
          <a className="outline-button" href="#about">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="/assets/banner-stack.png"
          alt="A colorful layered illustration representing a development stack"
        />
      </div>
    </section>
  )
}

export default Hero
