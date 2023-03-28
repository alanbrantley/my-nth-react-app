import BlogList from './BlogList';
import blogs from "./db";

const Home = () => {

    return (
        <div className="home">
            {blogs && <BlogList {...blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;
