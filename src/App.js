import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

//needs to take link and display name on button
function Button() {
  return (
    <button> 
      this is a button
    </button>
  )
}

function Page() {
  return (
    <div class="container">
      <div class="row">
        <Header />
        <hr></hr>
      </div>
      <div class="flex-container m-5">
        <div class="row">
          <div class="col-12 col-lg-3 border rounded d-flex flex-column">
            <SideBar />
          </div>
          <div class="col-12 col-lg-9 border rounded d-flex flex-column">
            <Body />
          </div>
        </div>
      </div>  
      <div class="row">
        <hr></hr>
        <Footer />
      </div>
    </div>
  )  
}

function Footer() {
  return (
    <div>
      <p> this is a footer section </p>
    </div>
  );
}

function SideBar(){
  // make an array for sub pages and for each subpage, there will be a link for navigation 
  //make the sidebar a drop down when not fit on page
  return <p> this is a sidebar </p>
}

function Header() {
  return (
      <div>
        <h1> this is a header section </h1>
        <Pictures />
        <Navigation />
      </div>
    );
}

function Body() {
  return (
    <div>
      <p> this is a page body section </p>
      <Text />
      <Text />
      <Text />
      <Text />
    </div>
  );
}

function Navigation() {
  return (
    //for every page, create navigation button with name and linked to page
    <div>
      <p> this is going to be the navigation bar </p>
      <Button />
      <Button />
      <Button />

    </div>
  ); 
}

function Pictures(){
  return <p> I'll def put an image here </p>
}

//need to create an array for these

function Certificates() {
  
}

function Volunteering() {
  return <Page />;
}

function AboutMe() {
  return <Page />;
}

function Skills() {
  return <Page />;
}

function CodingProjects() {
  return <Page />;
}

function ArtProjects() {
  return <Page />;
}

function Contact() {
  return (
    <div> 
      <Page />
      <Email />
      <LinkedIn />
      <Socials />
      <GitHub />
    </div>   
  );
}

function Email(){
  return (
    <div>
       <p> this is an email icon </p>
      <p> this is my email </p>
    </div>
  );
}

function LinkedIn(){
  return (
    <div>
       <p> this is a linkedIn icon </p>
      <p> this is my linkedIn </p>
    </div>
  );
}

function Socials(){
  return (
    <div>
       <p> this is an instagram icon </p>
      <p> this is my instagram </p>
    </div>
  );
}

function GitHub(){
  return (
    <div>
       <p> this is a github icon </p>
       <p> this is my github </p>
    </div>
  );
}

export default function Kilgore() {
  return (
    <div>
      <Page />
    </div>
  );
}

function Text() {
  return <p> this is a text box </p>
}
