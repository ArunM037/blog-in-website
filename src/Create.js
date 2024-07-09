import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
    const [title, settitle] = useState('')
    const [body, setbody] = useState('')
    const [author, setauthor] = useState('mario');
    const [isPending, setisPending] = useState(false);
    const his = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setisPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setisPending(false)
            his.push('/')
        })
    }

    return (
        <div className="create">
            <h2>create new blog</h2>
            <form onSubmit={handleSubmit} >
                <label >Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                />
                <label >Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setbody(e.target.value)}
                ></textarea>
                <label >Blog author</label>
                <select
                    value={author}
                    onChange={(e) => setauthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;