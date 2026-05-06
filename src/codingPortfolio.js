import Page from "./page";
import { useGitHubRepos } from './useGitHubRepos';
import { useSearch } from './searchContext';
import { useEffect, useRef, useState } from 'react';
import './styles.css';
import ContentCard from "./contentCard";

export default function CodingPortfolio() {
  const { repos, loading, error } = useGitHubRepos('kileycos');
  const { submittedTerm } = useSearch();
  const itemRefs = useRef([]);
  const [filterTerm, setFilterTerm] = useState('');

   const filteredRepos = repos.filter(repo => {
    const term = filterTerm.toLowerCase();
    return (
      repo.name.toLowerCase().includes(term) ||
      repo.description?.toLowerCase().includes(term) ||
      repo.language?.toLowerCase().includes(term)
    );
  });

  useEffect(() => {
    if (!submittedTerm.trim()) return;
    const term = submittedTerm.toLowerCase();
    const firstMatch = itemRefs.current.find(
      el => el && el.dataset.tags?.toLowerCase().includes(term)
    );
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstMatch.classList.add('search-highlight');
      setTimeout(() => firstMatch.classList.remove('search-highlight'), 2000);
    }
  }, [submittedTerm]);

  return (
    <Page>
      <h2>Coding Portfolio</h2>
      <p className="flip-hint">Click a card to learn more</p>

      <div className="portfolio-search">
        <input
          type="text"
          placeholder="Filter by name, language, description…"
          value={filterTerm}
          onChange={e => setFilterTerm(e.target.value)}
          className="portfolio-search-input"
        />
        {filterTerm && (
          <button className="portfolio-search-clear" onClick={() => setFilterTerm('')}>
            ✕
          </button>
        )}
        {filterTerm && (
          <span className="portfolio-search-count">
            {filteredRepos.length} result{filteredRepos.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {loading && <p>Loading repos…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && filteredRepos.length === 0 && filterTerm && (
        <p className="no-results">No repos found for "{filterTerm}"</p>
      )}

      <div className="cards-grid">
        {filteredRepos.map((repo, i) => (
          <div
            key={repo.id}
            ref={el => itemRefs.current[i] = el}
            data-tags={`${repo.name} ${repo.description ?? ''} ${repo.language ?? ''}`}
          >
            <ContentCard
              title={repo.name}
              description={repo.description ?? 'No description'}
              href={repo.html_url}
              language={repo.language}
              contributed={repo.contributed}
              repoFullName={repo.full_name}
              stars={repo.stargazers_count}
              watchers={repo.watchers_count}
              openIssues={repo.open_issues_count}
            />
          </div>
        ))}
      </div>
    </Page>
  );
}


