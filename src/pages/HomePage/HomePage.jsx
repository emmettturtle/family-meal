import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeed } from '../../utilities/rest-profile-api';
import Post from '../../components/Post/Post';
import { DateTime } from 'luxon';


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
            posted={DateTime.fromISO(post.posted).toLocaleString(DateTime.DATE_SHORT)}
            time={DateTime.fromISO(post.time).toLocaleString(DateTime.DATETIME_SHORT)}
            rsvpTotal={post.rsvpTotal}
            rsvpList={post.rsvpList}
            likes={post.likes}
            comments={post.comments}
        />
    )

    return (
        <div className='m-7'>
            {feedPosts.length ?
                <>
                    <div className='mb-5'>
                        <span className='font-bold text-xl'>
                            Activity in {restarauntProfile.address.city}, {restarauntProfile.address.state} and surrounding neighborhoods...
                        </span>
                        <br />
                        <span>
                            {feed.length} distribution posts in your area
                        </span>
                    </div>
                    <div className='grid-cols-1'>
                        {feedPosts}
                    </div>
                </>
            :
            <div className='mb-5'>
                <span className='text-xl'>
                    No posts yet in {restarauntProfile.address.city}, {restarauntProfile.address.state} or surrounding areas... yet!
                </span>
            </div>
            }
            
        </div>
    );
}