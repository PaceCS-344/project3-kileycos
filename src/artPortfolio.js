import Page from "./page";
import ContentCard from "./contentCard";
import artProjectOne from './images/artProjectOne.jpg';
import './styles.css';
import { useSearch } from './searchContext';
import { useEffect, useRef, useState } from "react";

const artProjects = [
  {
    title: "Portraits in a Magazine",
    description: "Drew portraits of my boyfriend in a Brooklyn Rail magazine. Created as a final assignment for NYC and the Visual Arts class in fall 2025. The drawing was layered over an advertisement for one of the shows we attended during class.",
    imageUrl: artProjectOne,
    tags: "portrait drawing pencil magazine brooklyn rail nyc art charcoal",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "placeholder.jpg",
    tags: "art standin",
  },
];

export default function ArtPortfolio() {
  const { submittedTerm } = useSearch();
  const itemRefs = useRef([]);
  const [filterTerm, setFilterTerm] = useState('');

  const filteredProjects = artProjects.filter(p => {
    const term = filterTerm.toLowerCase();
    return (
      p.title.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.tags.toLowerCase().includes(term)
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
      <h2>Art Portfolio</h2>
      <p className="flip-hint">Click a card to learn more</p>

      <div className="portfolio-search">
        <input
          type="text"
          placeholder="Filter by title, medium, tags…"
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
            {filteredProjects.length} result{filteredProjects.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {!filterTerm && filteredProjects.length === 0 && (
        <p className="no-results">No projects found for "{filterTerm}"</p>
      )}

      <div className="cards-grid">
        {filteredProjects.map((p, i) => (
          <div
            key={p.title}
            ref={el => itemRefs.current[i] = el}
            data-tags={p.tags}
          >
            <ContentCard
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
            />
          </div>
        ))}
      </div>
    </Page>
  );
}
