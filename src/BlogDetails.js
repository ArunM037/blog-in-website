import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import loading from './loading.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const his = useHistory();

    const handleclick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            console.log('blog deleted')
            his.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div className='loading'><img src={loading} alt="loading" width={150} height={150} /></div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleclick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
