import './App.css';

const faqItems = [
  {
    question: 'What is Netflix?',
    answer:
      'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  },
  {
    question: 'How much does Netflix cost?',
    answer:
      'Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range by region and feature set.',
  },
  {
    question: 'Where can I watch?',
    answer:
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any device that offers the Netflix app.',
  },
  {
    question: 'How do I cancel?',
    answer:
      'Netflix is flexible. There are no contracts and no commitments. You can easily cancel your account online at any time.',
  },
  {
    question: 'What can I watch on Netflix?',
    answer:
      'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning originals, and more. Watch as much as you want, anytime you want.',
  },
  {
    question: 'Is Netflix good for kids?',
    answer:
      'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
  },
];

const footerSections = {
  company: ['Media Center', 'Jobs', 'Terms of Use', 'Privacy', 'Contact Us'],
  support: ['Account', 'Help Center', 'Media Center', 'Investor Relations', 'Speed Test'],
  legal: ['Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Only on Netflix']
};

const featureImages = {
  tv: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1280&q=80',
  phone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  downloadThumb: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=300&q=80',
  monitor: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1280&q=80',
  tablet: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
  phoneMini: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80',
  kids: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80',
};

function EmailForm({ inputId }) {
  return (
    <form className="email-form" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor={inputId} className="sr-only">
        Email Address
      </label>
      <input id={inputId} type="email" placeholder="Email address" required />
      <button type="submit">Get Started &gt;</button>
    </form>
  );
}

function App() {
  return (
    <div className="netflix-page">
      <header className="netflix-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="netflix-logo" aria-label="Netflix">
              NETFLIX
            </h1>
            <nav className="main-nav">
              <ul>
                <li><a href="#home" className="nav-link active">Home</a></li>
                <li><a href="#tv" className="nav-link">TV Shows</a></li>
                <li><a href="#movies" className="nav-link">Movies</a></li>
                <li><a href="#new" className="nav-link">New & Popular</a></li>
                <li><a href="#mylist" className="nav-link">My List</a></li>
                <li><a href="#languages" className="nav-link">Browse by Languages</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="header-right">
            <div className="search-box">
              <button className="search-btn" aria-label="Search">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.5 16.5M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <a href="https://www.netflix.com/login" target="_blank" rel="noopener noreferrer" className="sign-in-link">
              Sign In
            </a>
            
            <div className="user-menu">
              <button className="kids-link">KIDS</button>
              <button className="dvd-link">DVD</button>
              <div className="notifications">
                <button className="notification-btn" aria-label="Notifications">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9965 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              <div className="user-dropdown">
                <button className="user-avatar-btn" aria-label="User menu">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80" alt="User" className="user-avatar" />
                  <span className="dropdown-arrow">▼</span>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=32&h=32&q=80" alt="User" className="dropdown-avatar" />
                    <div className="user-info">
                      <span className="user-email">user@netflix.com</span>
                      <button className="manage-profiles">Manage Profiles</button>
                    </div>
                  </div>
                  <div className="dropdown-section">
                    <h4>Account</h4>
                    <a href="#">Account</a>
                    <a href="#">Help Center</a>
                    <a href="#">Sign out of Netflix</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="wrapper hero-content">
            <h1>Unlimited movies, TV shows, and more</h1>
            <p className="hero-price">Starts at $7.99. Cancel anytime.</p>
            <p className="hero-subtitle">Ready to watch? Enter your email to create or restart your membership.</p>
            <EmailForm inputId="hero-email" />
          </div>
        </section>

        <section className="feature-section">
          <div className="wrapper split">
            <div className="split-text">
              <h3>Enjoy on your TV</h3>
              <p>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
              </p>
            </div>

            <div className="split-media">
              <div className="tv-frame">
                <div className="tv-screen">
                  <img src={featureImages.tv} alt="Movie scene playing on a television" loading="lazy" />
                  <span className="screen-tag">NETFLIX</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="wrapper split split-reverse">
            <div className="split-text">
              <h3>Download your shows to watch offline</h3>
              <p>Save your favorites easily and always have something to watch.</p>
            </div>

            <div className="split-media">
              <div className="phone-frame">
                <img src={featureImages.phone} alt="Movie browsing screen on a mobile phone" loading="lazy" />
              </div>
              <div className="download-card">
                <div className="download-thumb" aria-hidden="true">
                  <img src={featureImages.downloadThumb} alt="" loading="lazy" />
                </div>
                <div className="download-meta">
                  <h4>Stranger Things</h4>
                  <p>Downloading...</p>
                </div>
                <span className="download-icon" aria-hidden="true">
                  ↓
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="wrapper split">
            <div className="split-text">
              <h3>Watch everywhere</h3>
              <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>

            <div className="split-media">
              <div className="device-stack">
                <div className="device monitor">
                  <img src={featureImages.monitor} alt="Streaming content on a desktop monitor" loading="lazy" />
                </div>
                <div className="device tablet">
                  <img src={featureImages.tablet} alt="Streaming content on a tablet" loading="lazy" />
                </div>
                <div className="device phone">
                  <img src={featureImages.phoneMini} alt="Streaming content on a phone" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="wrapper split split-reverse">
            <div className="split-text">
              <h3>Create profiles for kids</h3>
              <p>
                Send kids on adventures with their favorite characters in a space made just for them, free with your membership.
              </p>
            </div>

            <div className="split-media kids-panel">
              <img
                className="kids-image"
                src={featureImages.kids}
                alt="Kids watching family movies together"
                loading="lazy"
              />
              <div className="kids-stars" aria-hidden="true">
                ★ ★ ★
              </div>
              <h4>Kids Space</h4>
              <p>Family-friendly TV and movies in one place.</p>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <div className="wrapper">
            <h3>Frequently Asked Questions</h3>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <p className="faq-subtitle">Ready to watch? Enter your email to create or restart your membership.</p>
            <EmailForm inputId="faq-email" />
          </div>
        </section>
      </main>

      <footer className="netflix-footer">
        <div className="footer-content">
          <div className="footer-top">
            <p className="footer-contact">Questions? Call 1-844-505-2993</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <ul>
                {footerSections.company.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                {footerSections.support.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                {footerSections.legal.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="language-selector">
              <button className="language-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14.5C4.41 14.5 1.5 11.59 1.5 8C1.5 4.41 4.41 1.5 8 1.5C11.59 1.5 14.5 4.41 14.5 8C14.5 11.59 11.59 14.5 8 14.5Z"/>
                  <path d="M8 3C5.24 3 3 5.24 3 8C3 10.76 5.24 13 8 13C10.76 13 13 10.76 13 8C13 5.24 10.76 3 8 3ZM8 11.5C6.07 11.5 4.5 9.93 4.5 8C4.5 6.07 6.07 4.5 8 4.5C9.93 4.5 11.5 6.07 11.5 8C11.5 9.93 9.93 11.5 8 11.5Z"/>
                </svg>
                English
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
            
            <p className="footer-region">Netflix United States</p>
            
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
