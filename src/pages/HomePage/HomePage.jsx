import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeed } from '../../utilities/rest-profile-api';
import Post from '../../components/Post/Post';


export default function HomePage({restarauntProfile}) {
    const [feed, setFeed] = useState([]);

    useEffect(function() {
        async function getUserFeed() {
            const userFeed = await getFeed();
            setFeed(userFeed.reverse());
        }
        getUserFeed();
    }, []);

    const feedPosts = feed.map(post => 
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
    )

    return (
        <div className='m-7'>
            <div className='mb-5'>
                <span className='font-bold text-xl'>
                    Activity in {restarauntProfile.address.city}, {restarauntProfile.address.state} and surrounding neighborhoods...
                </span>
                <br />
                <span>
                    {feed.length} distribution posts in your area
                </span>
            </div>
            <Link to="/rest-post/new">Create New Post</Link>
            <div className='grid-cols-1'>
                {feedPosts}
            </div>
        </div>
    );
}