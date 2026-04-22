export default function CodeSection({codesectionTitle, codesectionBody, codesectionLink}){
    return (
        <div className="container">
            <div className="flex-container m-5">
                <div className="row">
                    <div className="col-12 col-lg-8 border rounded d-flex flex-column">
                        <h3> {codesectionTitle} </h3>
                        <p> {codesectionBody} </p>
                    </div>
                    <div className="col-12 col-lg-4 border rounded d-flex flex-column">
                        {codesectionLink}
                    </div>    
                </div>
            </div>
        </div>
    );
}