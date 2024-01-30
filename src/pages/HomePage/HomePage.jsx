import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function HomePage() {
    const [feed, setFeed] = useState([]);



    return (
        <>
            <h1>Home Page</h1>
            <Link to="/rest-post/new">Create New Post</Link>
        </>
    );
}