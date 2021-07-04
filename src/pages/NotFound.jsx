import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = (props) => {
    useEffect(() => props.header());
    return (<div>
        <p>Page not found</p>
        <Link to="/">Back to Home Page</Link>
    </div>);
}

export default NotFound;