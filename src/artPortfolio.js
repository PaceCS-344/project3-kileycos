import Page from "./page";
import ContentCard from "./contentCard";
import artProjectOne from './images/artProjectOne.jpg';

const artProjects = [
  {
    title: "Portraits in a Magazine",
    description: "Drew portraits of my boyfriend in a Brooklyn Rail magazine. Created as a final assignment for NYC and the Visual Arts class in fall 2025. The drawing was layered over an advertisement for one of the shows we attended during class.",
    imageUrl: artProjectOne,
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imageUrl: "placeholder.jpg",
  },
];

export default function ArtPortfolio() {
  return (
    <Page>
      <h2>Art Portfolio</h2>
      <p className="flip-hint">Click a card to learn more</p>
      <div className="cards-grid">
        {artProjects.map(p => (
          <Card key={p.title} title={p.title} description={p.description} imageUrl={p.imageUrl} />
        ))}
      </div>
    </Page>
  );
}
