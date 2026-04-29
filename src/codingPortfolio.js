import Page from "./page";
//import Button from "./button";
import CodeSection from "./codingSection";

export default function CodingPortfolio() {
  return (
    <Page>
      <h2>Coding Portfolio</h2>
      <p> I don't know what to put here </p>
      <p> I'm testing someting </p>

      <div>
        {/* Project cards will go here */}
        <div>
          <CodeSection codesectionTitle="Riddle Me This" codesectionBody="Created a riddle game using Java, in collaboration with Alex Sullivan as a final project." codesectionLink={<a href="https://github.com/hyperbole22/TermProject_RiddleMeThis" target="_blank" rel="noopener noreferrer">View on GitHub</a>} />
        </div>
        <div>
          <CodeSection codesectionTitle="Project 2" codesectionBody="Description of Project 2" codesectionLink={<a href="https://github.com" target="_blank" rel="noopener noreferrer">View on GitHub</a>} />
        </div>
      </div>
    </Page>
  );
}


