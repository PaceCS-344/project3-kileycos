import Page from './page';

const CONTACT_INFO = {
    workEmail: "kiley.a.cos@gmail.com",
    artEmail: "kaecos.art@gmail.com",
    paceEmail: "kiley.a.cosgrove@pace.edu",
    linkedIn: "put linked here",
    github: "put github here",
    instagram: "put instagram here",
};


export default function ContactPage() {
    return (
        <Page>
            <h2>Contact</h2>
            <p>please don't contact me</p>

            <div>
                <p>
                    workEmail: kiley.a.cos@gmail.com
                    artEmail: kaecos.art@gmail.com
                    paceEmail: kiley.a.cosgrove@pace.edu
                    linkedIn: put linked here
                    github: put github here
                    instagram: put instagram here
                </p>
            </div>
        </Page>
    );
}
