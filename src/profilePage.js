//need to re-add later on: education, languages, certificates
import Page from "./page";
import Button from "./button";
import profile from "./images/profile.JPEG"
import './styles.css'

console.log(profile)

export default function ProfilePage() {
    return (
        <Page>
            <div className="container">
                <div className="flex-container m-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 border rounded d-flex flex-column"> 
                            <img src={profile} alt="profile photo" />
                        </div>
                        <div className="col-12 col-lg-8 border rounded d-flex flex column"  className="body">
                            <h2> About Me</h2>
                            
                            <p>
                                I am a sophomore majoring in both Computer Science and art at Pace University.
                                I also have a minor in graphic design (ignore how bad the graphic design is on this site, I haven't
                                had the time to really edit it yet). My preferred medium is chalk pastel, and my perferred language 
                                (as of right now) is Java.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <h3> Skills </h3>
                        <p> Java || Python || CSS || HTML || JavaScript || PHP </p>
                        <p> Adobe Suite || Blender || Digital Design </p>
                        <p> Microsoft Suite || Google Suite </p>
                    </div>
                </div>
            </div>
        </Page>
    );
}

