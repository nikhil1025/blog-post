import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import NewBlog from "./pages/NewBlog.jsx";
import BlogDetails from './pages/BlogDetails.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => {
    const [header, setHeader] = useState(() => "All Blogs!");

    const homeHeader = (notext = 0) => {
        setHeader("All Blogs!");
    };
    const newBlogHeader = (notext = 0) => {
        setHeader("Create A New One");
    };

    const blogDetails = (blogTitle) => {
        setHeader(blogTitle);
    };

    const notFound = (notext = 0) => {
        setHeader("Page Not Found");
    };

    return (
        <Router>
            <Navbar headerInfo={header} />
            <Switch>
                <Route exact path="/">
                    <Home header={homeHeader} />
                </Route>
                <Route exact path="/create">
                    <NewBlog header={newBlogHeader} />
                </Route>
                <Route exact path="/blogs/:id">
                    <BlogDetails header={blogDetails} />
                </Route>
                <Route exact path="*">
                    <NotFound header={notFound} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;