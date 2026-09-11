const footerGroups = [
  {
    title: 'Product',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Technologies', href: '#technologies' },
      { label: 'Projects', href: '#projects' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
]

function Footer() {
  return (
    <footer className="site-footer" id="about">
      <div className="footer-main container">
        <div className="footer-brand">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="social-links" aria-label="Social media links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-groups" id="contact">
          {footerGroups.map((group) => (
            <div className="footer-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a key={link.label} href={link.href}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div>
          <a id="privacy" href="#privacy">Privacy</a>
          <a id="terms" href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
