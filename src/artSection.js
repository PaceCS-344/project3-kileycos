export default function ArtSection({sectionTitle, sectionBody, sectionImage}){
    return (
        <div className="container">
            <div className="flex-container m-5">
                <div className="row">
                    <div className="col-12 col-lg-8 border rounded d-flex flex-column">
                        <h3> {sectionTitle} </h3>
                        <p> {sectionBody} </p>
                    </div>
                    <div className="col-12 col-lg-4 border rounded d-flex flex-column">
                        {sectionImage}
                    </div>    
                </div>
            </div>
        </div>
    );
}

   