import { useParams } from "react-router-dom";
import blogs from "./db";

const BlogDetails = () => {

    const { id } = useParams();

    // Get the blog from the json file
    const blog = blogs.blogs.find((blog) => blog.id === parseInt(id));

    return (
        <div className="blog-details">

        { blog && (
                <article>
                    <h2>{blog.title }</h2>
                    <p>By { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}

export default BlogDetails;
