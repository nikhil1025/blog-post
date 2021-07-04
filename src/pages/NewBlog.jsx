import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


const NewBlog = (props) => {

    useEffect(() => props.header());

    const [author, setAuthor] = useState(() => "");
    const [title, setTitle] = useState(() => "");
    const [description, setDescription] = useState(() => "");
    const [content, setContent] = useState(() => "");
    const [loading, setLoading] = useState(() => false);

    const history = useHistory();

    const indicatorStyle = {
        marginTop: "25px",
        fontFamily: "cursive",
        fontSize: "18px"
    };

    const textStyle = {
        fontSize: "18px",
        padding: "5px",
    };

    const dataStyle = {
        fontFamily: "courier",
        width: "400px"
    };

    const trayStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "25px"
    };

    const mainTrayStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    };

    const submitStyle = {
        padding: "5px",
        marginTop: "25px",
        backgroundColor: "red",
        border: "none",
        color: "white",
        fontSize: "18px"
    };

    const submitParentStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, author, description, content };

        setLoading(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setLoading(false);
            history.push("/");
        }).catch(err => console.log(err.message));
    };

    return (
        <div style={mainTrayStyle}>
            <form onSubmit={handleSubmit} style={trayStyle}>
                <label style={indicatorStyle}>Author :</label>
                <input
                    style={textStyle}
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label style={indicatorStyle}>Title :</label>
                <input
                    style={textStyle}
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label style={indicatorStyle}>Description :</label>
                <input
                    style={textStyle}
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label style={indicatorStyle}>Content :</label>
                <textarea
                    style={dataStyle}
                    required
                    placeholder="Your Content Here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div style={submitParentStyle}>
                    {!loading && <button style={submitStyle} type="submit">Add Blog!</button>}
                    {loading && <button style={submitStyle} type="submit">Adding...</button>}
                </div>
            </form>
        </div >
    );
};

export default NewBlog;