import { Link } from "react-router-dom";
import "./blogStyle.css";

const BlogList = (props) => {

    const divStyle = {
        fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans- serif`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px"
    };

    const headerStyle = {
        color: "#1fcbba"
    };

    const paragraphStyle = {
        color: "#666"
    };

    const spanStyle = {
        color: "#ccc",
        fontStyle: "italic"
    };

    const linkStyle = {
        textDecoration: "none"
    };

    return (
        <div style={divStyle}>
            {props.data.map(blog => (
                <div className="blog-div" key={blog.id}>
                    <Link style={linkStyle} to={`/blogs/${blog.id}`}>
                        <h2 style={headerStyle}>{blog.id + ". " + blog.title}</h2>
                        <p style={paragraphStyle}>{blog.description}</p>
                        <span style={spanStyle}>{blog.author}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default BlogList;