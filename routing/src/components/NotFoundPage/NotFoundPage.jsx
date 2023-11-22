import { Link } from "react-router-dom";


const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function ErrorPage() {
    return (
        <div>
            <h1>404</h1>
            <img src={imgURL} alt="404 error gif" className="page-img" />
            <hr />
            <Link to={'/'}>Volver a inicio (SPA)</Link>
        </div>
    );
}

export default ErrorPage;
