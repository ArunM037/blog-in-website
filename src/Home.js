import BlogList from './BlogList';
import loading from './loading.svg';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div className="loading"><img src={loading} alt="loading" width={150} height={150} /></div>}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
        </div>
    );
}

export default Home;