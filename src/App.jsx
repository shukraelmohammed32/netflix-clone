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

const footerLinks = [
  'FAQ',
  'Help Center',
  'Account',
  'Media Center',
  'Investor Relations',
  'Jobs',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Netflix',
];

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
      <header className="hero">
        <div className="hero-overlay" aria-hidden="true" />

        <div className="wrapper nav-wrap">
          <h1 className="logo" aria-label="Netflix">
            NETFLIX
          </h1>

          <div className="nav-actions">
            <button type="button" className="language-btn">
              English
            </button>
            <button type="button" className="sign-in-btn">
              Sign In
            </button>
          </div>
        </div>

        <div className="wrapper hero-content">
          <h2>Unlimited movies, TV shows, and more</h2>
          <p className="hero-price">Starts at $7.99. Cancel anytime.</p>
          <p className="hero-subtitle">Ready to watch? Enter your email to create or restart your membership.</p>
          <EmailForm inputId="hero-email" />
        </div>
      </header>

      <main>
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

      <footer className="footer-section">
        <div className="wrapper footer-content">
          <p className="contact">Questions? Call 1-844-505-2993</p>

          <div className="footer-grid">
            {footerLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>

          <button type="button" className="language-btn footer-language">
            English
          </button>

          <p className="region">Netflix Clone - United States</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
