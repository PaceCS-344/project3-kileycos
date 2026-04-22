import Page from './page';
import mail from './images/mailIcon.png';
import linkedIn from './images/linkedInIcon.webp';
import gitHub from './images/gitHubIcon.png';
import insta from './images/instaIcon.webp';
import './styles.css';


console.log(mail)
console.log(linkedIn)
console.log(gitHub)
console.log(insta)

const CONTACT_INFO = [
    { key: "workEmail", label: "email", value: "kiley.a.cos@gmail.com", icon: <img className="icon" src={mail} alt="mail icon" /> },
    { key: "artEmail", label: "email", value: "kaecos.art@gmail.com", icon: <img className="icon" src={mail} alt="mail icon" /> },
    { key: "paceEmail", label: "email", value: "kiley.a.cosgrove@pace.edu", icon: <img className="icon" src={mail} alt="mail icon" /> },
    { key: "linkedIn", label: "linkedIn", value: <a href="https://www.linkedin.com/in/kiley-cosgrove-98b672350/"> LinkedIn </a>, icon: <img className="icon" src={linkedIn} alt="linkedIn icon" /> },
    { key: "github", label: "gitHub",value: <a href="https://github.com/kileycos"> GitHub </a>, icon: <img className="icon" src={gitHub} alt="gitHub icon" /> },
    { key: "instagram", label: "instagram", value: "need to figure out my art insta password before I can put the link here", icon: <img className="icon" src={insta} alt="instagram icon" /> },
];


export default function ContactPage() {
    return (
        <Page>
            
            <h2>Contact</h2>
            <p> If you have any question or would just like to reach out, you can reach me in the following ways:</p>

            <div>
                <ul>
                    {CONTACT_INFO.map(({key, label, value, icon}) => (
                        <li key={key}>
                            {icon} {label}: {value}
                        </li>
                    ))}
                </ul>
            </div>
        </Page>
    );
}
