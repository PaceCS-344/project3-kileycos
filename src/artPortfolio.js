import Page from "./page";
import Button from "./button";

export default function ArtPortfolio() {
  return (
    <Page>
      <h2>Art Portfolio</h2>
      <p> look through my art and judge it I guess </p>
      <p> I need to make the sideBar navigate through the different projects</p>

      <div>
        {/* Gallery items will go here */}
        <div>
          <img src="placeholder.jpg" alt="Artwork title" />
          <p>Artwork Title</p>
          <p>Medium — Year</p>
        </div>
        <div>
          <img src="placeholder.jpg" alt="Artwork title" />
          <p>Artwork Title</p>
          <p>Medium — Year</p>
        </div>
      </div>

      <Button label="See More" />
    </Page>
  );
}
