import { useState } from 'react';
import './styles.css';

export default function ContentCard({ title, description, imageUrl, href }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card-flip ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(p => !p)}>
      <div className="card-inner">
        <div className="card-front">
          {imageUrl
            ? <img src={imageUrl} alt={title} />
            : <div className="card-front-placeholder" />
          }
          <div className="front-label">
            <h3>{title}</h3>
            <span>Click to explore</span>
          </div>
        </div>
        <div className="card-back">
          <h3>{title}</h3>
          <p>{description}</p>
          {href
            ? (
              <a
                className="learn-btn"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                View on GitHub
              </a>
            ) : (
              <button className="learn-btn" onClick={e => e.stopPropagation()}>
                Learn More
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}