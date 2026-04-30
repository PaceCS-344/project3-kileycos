import Page from "./page";
import ContentCard from "./contentCard";

const codingProjects = [
  {
    title: "Riddle Me This",
    description: "Created a riddle game using Java, in collaboration with Alex Sullivan as a final project.",
    href: "https://github.com/hyperbole22/TermProject_RiddleMeThis"
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    href: "https://github.com"
  }
];

export default function CodingPortfolio() {
  return (
    <Page>
      <h2>Coding Portfolio</h2>
      <p>I don't know what to put here</p>
      <p className="flip-hint">Click a card to learn more</p>
      <div className="cards-grid">
        {codingProjects.map(p => (
          <ContentCard key={p.title} title={p.title} description={p.description} href={p.href} />
        ))}
      </div>
    </Page>
  );
}


