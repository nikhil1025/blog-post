import { Link } from "react-router-dom";
import "./comStyles.css";

const Navbar = (props) => {

    const linkStyle = {
        textDecoration: "none",
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans- serif`,
        border: "none",
        padding: "10px",
        marginLeft: "10px",
        color: "black"
    };

    const navStyle = {
        width: "100%"
    };

    const headerStyle = {
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans- serif`,
        display: "inline-block",
        color: "red",
        width: "50%"
    };

    const divStyle = {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "end",
        width: "50%"
    };

    const buttons = [
        { text: "Home", path: "/", id: 1 },
        { text: "New Blog", path: "/create", id: 2 },
        { text: "Services", path: "/", id: 3 }
    ];

    return (
        <nav style={navStyle}>
            <h1 style={headerStyle}>{props.headerInfo}</h1>
            <div style={divStyle}>
                {buttons.map(item => (
                    <Link className="navBtn" style={linkStyle} to={item.path} key={item.id}>{item.text}</Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;