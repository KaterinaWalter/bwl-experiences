export default function Header() {
    return (
        <header className="App-header container-fluid pt-3 text-center">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <img src="bwl_lion_logo_square.png" alt="Logo" className="App-logo d-inline-block"/>
                        </div>
                        <div className="col-8">
                            <span className="App-title">BWL Opportunity Board</span>
                        </div>
                        <div className="col-2">
                            <img src="bwl_lion_logo_square.png" alt="Logo" className="App-logo d-inline-block"/>
                        </div>
                    </div> 
                    <div className="row">
                        <p className="App-description">Welcome, Lions! Here is your database for finding enrichment opportunities, including: <strong>extracurricular activities</strong>, <strong>summer programs</strong>, <strong>internships</strong>, <strong>jobs</strong>, and more.</p>
                    </div>
                </div>
            {/*
            <div className="d-flex justify-content-around">
                <button className="btn btn-secondary shadow-sm fw-bold">Resumé Tips</button>
                <button className="btn btn-secondary shadow-sm fw-bold">Contact Us!</button>
            </div>
            */}
        </header>
    );
}