import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeed } from '../../utilities/rest-profile-api';
import Post from '../../components/Post/Post';


export default function HomePage() {
    const [feed, setFeed] = useState([]);

    useEffect(function() {
        async function getUserFeed() {
            const userFeed = await getFeed();
            setFeed(userFeed);
        }
        getUserFeed();
    }, []);

    const feedPosts = feed.map(post => {
        <Post 
            key={post._id}
            profile={post.profile}
            user={post.user}
            description={post.description}
            location={post.location}
            posted={post.posted}
            time={post.time}
            rsvpTotal={post.rsvpTotal}
            rsvpList={post.rsvpList}
            likes={post.likes}
            comments={post.comments}
        />
    })

    return (
        <>
            <h1>Home Page</h1>
            <Link to="/rest-post/new">Create New Post</Link>
            {feedPosts}
        </>
    );
}