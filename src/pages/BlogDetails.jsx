import { useEffect } from 'react';
import { useParams, useHistory } from "react-router";
import useFetch from "../services/useFetch.js";

const BlogDetails = (props) => {

    const { id } = useParams();
    const { blogData, loading, error } = useFetch("http://localhost:8000/blogs/" + id);

    const history = useHistory();

    useEffect(() => {
        if (blogData)
            props.header("Hello " + blogData.author);
    }, [blogData, props]);

    const deleteDivStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "15px"
    };

    const buttonStyle = {
        border: "none",
        padding: "8px",
        paddingLeft: "24px",
        paddingRight: "24px",
        marginTop: "5px",
        backgroundColor: "red",
        color: "white",
        fontSize: "15px",
        cursor: "pointer"
    };

    const containerStyle = {
        marginTop: "50px",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        color: "grey"
    };

    const trayStyle = {
        width: "50%",
    };

    const titleStyle = {
        fontFamily: "algerian",
        fontSize: "36px",
        color: "red"
    };

    const descriptionStyle = {
        marginTop: "15px",
        fontFamily: "sans-serif",
        fontSize: "18px"
    };

    const contentStyle = {
        fontFamily: "courier",
        fontSize: "15px",
        marginTop: "15px",
        color: "#555",
        fontWeight: "bold"
    };

    const authorStyle = {
        marginTop: "50px",
        fontFamily: "cursive",
        color: "black"
    };

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            history.push("/");
        }).catch(err => {
            console.log(err.message);
        });
    };

    return (<div>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {blogData &&
            <div style={containerStyle} >
                <div style={trayStyle}>
                    <div style={titleStyle}>
                        <span>{blogData.title}</span>
                    </div>
                    <div style={descriptionStyle}>
                        <span>{blogData.description}</span>
                    </div>
                    <div style={contentStyle}>
                        <span>{blogData.content}</span>
                    </div>
                    <div style={authorStyle}>
                        <span>{"-> " + blogData.author}</span>
                    </div>
                    <div style={deleteDivStyle}>
                        <button style={buttonStyle} onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div >
        }
    </div>
    );
};

export default BlogDetails;
