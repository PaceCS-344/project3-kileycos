import { useState, useEffect } from 'react';
import './styles.css';

function useRepoDetails(repoFullName, enabled) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled || !repoFullName) return;
    setLoading(true);
    Promise.all([
      fetch(`https://api.github.com/repos/${repoFullName}/contributors`).then(r => r.json()),
      fetch(`https://api.github.com/repos/${repoFullName}/releases`).then(r => r.json()),
      fetch(`https://api.github.com/repos/${repoFullName}/tags`).then(r => r.json()),
    ]).then(([contributors, releases, tags]) => {
      setDetails({ contributors, releases, tags });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [enabled, repoFullName]);

  return { details, loading };
}

export default function ContentCard({ title, description, imageUrl, href, language, contributed, repoFullName, stars, watchers, openIssues }) {
  const [flipped, setFlipped] = useState(false);
  const { details, loading } = useRepoDetails(repoFullName, flipped);

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

          <div className="card-badges">
            {language && <span className="lang-badge">{language}</span>}
            {contributed && <span className="lang-badge contributor-badge">Contributor</span>}
          </div>

          <div className="repo-stats">
            {stars > 0 && <span>★ {stars}</span>}
            {watchers > 0 && <span>👁 {watchers}</span>}
            {openIssues > 0 && <span>⚠ {openIssues} issues</span>}
          </div>

          {loading && <p className="details-loading">Loading details…</p>}

          {details && (
            <div className="repo-details">
              {details.contributors?.length > 0 && (
                <div className="detail-section">
                  <span className="detail-label">Contributors</span>
                  <div className="contributor-list">
                    {details.contributors.slice(0, 5).map(c => (
                      <a key={c.id} href={c.html_url} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                        <img src={c.avatar_url} alt={c.login} title={c.login} className="contributor-avatar" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {details.releases?.length > 0 && (
                <div className="detail-section">
                  <span className="detail-label">Latest release</span>
                  <a                                        
                    href={details.releases[0].html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="detail-link"
                    onClick={e => e.stopPropagation()}
                  >
                    {details.releases[0].tag_name}
                  </a>
                </div>
              )}

              {details.releases?.length === 0 && details.tags?.length > 0 && (
                <div className="detail-section">
                  <span className="detail-label">Latest tag</span>
                  <span className="lang-badge">{details.tags[0].name}</span>
                </div>
              )}
            </div>
          )}

          {href && (
            <a                                             
              className="learn-btn"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              View on GitHub
            </a>
          )}
        </div>

      </div>
    </div>
  );
}