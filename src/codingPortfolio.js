import Page from "./page";
import Button from "./button";

export default function CodingPortfolio() {
  return (
    <Page>
      <h2>Coding Portfolio</h2>
      <p> I don't know what to put here </p>

      <div>
        {/* Project cards will go here */}
        <div>
          <h3>Project Name</h3>
          <p> Short description of project </p>
          <p> should put languaes and tools</p>
          <Button label="View on GitHub" />
        </div>
        <div>
          <h3>Project Name</h3>
          <p>Short description of what the project </p>
          <p>should put languaes and tools</p>
          <Button label="View on GitHub" />
        </div>
      </div>
    </Page>
  );
}