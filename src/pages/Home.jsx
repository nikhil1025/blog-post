import { useEffect } from "react";
import useFetch from "../services/useFetch.js";
import BlogList from "../services/BlogList.jsx";

const Home = (props) => {

    const { blogData, loading, error } = useFetch("http://localhost:8000/blogs");

    useEffect(() => props.header());
    
    return (<div>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {blogData && <BlogList data={blogData} />}
    </div>);
};

export default Home;