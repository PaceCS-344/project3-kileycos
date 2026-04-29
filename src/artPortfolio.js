import Page from "./page";
import Button from "./button";
import ArtSection from "./artSection";
import artProjectOne from './images/artProjectOne.jpg';

console.log(artProjectOne);

export default function ArtPortfolio() {
  return (
    <div>
      <Page>
        <h2>Art Portfolio</h2>
        <p> look through my art and judge it I guess </p>
        <h1> I'm going to go through and add more things for both my coding and art portfolios this weekend but I don't have time right now</h1>

        <div>
          {/* Gallery items will go here */}
          <div>
            <ArtSection 
            sectionTitle="Portraits in a Magazine" 
            sectionBody="Drew portraits of my boyfriend in a Brooklyn Rail magazine. It was created as a 
            final assignment for my NYC and the Visual Arts class in the fall 2025 semester. The drawing was created ove the advertisement for 
            one of the shows we went to see during class." 
            sectionImage={<img src={artProjectOne} alt="Artwork title" />} />
          </div>
          <div>
            <ArtSection sectionTitle="Project 2" sectionBody="Description of Project 2" sectionImage={<img src="placeholder.jpg" alt="Artwork title" />} />
          </div>
        </div>
      </Page>
    </div>
  );
}
