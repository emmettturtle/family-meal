import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { create } from "../../utilities/rest-posts-api";

export default function NewRestPostPage() {
    const navigate = useNavigate();
    const [newPost, setNewPost] = useState({
        description: '',
        location: '',
        time: '',
        donationValue: 0,
        rsvpTotal: 0
    })

    async function handleSubmit(evt) {
        evt.preventDefault();
        const payload = {...newPost};
        await create(payload);
        setNewPost({
            description: '',
            location: '',
            time: '',
            donationValue: 0,
            rsvpTotal: 0
        })
        navigate('/home');
    }

    function handleChange(evt) {
        setNewPost({
            ...newPost,
            [evt.target.name]: evt.target.value
        });
    }

    return(
        <main className='flex items-center justify-center'>
            <div className="rounded-md mb-5 border m-20">
                <form autoComplete="off" onSubmit={handleSubmit} className="m-5">
                    <label>Description: (What does this donation consist of?)</label>
                    <br />
                    <textarea 
                        name="description" 
                        value={newPost.description} 
                        onChange={handleChange}
                        className='border border-black rounded-lg p-1'
                    ></textarea>
                    <br /> <br />
                    <label>Location: </label>
                    <br />
                    <input 
                        type="text" 
                        name="location" 
                        value={newPost.location} 
                        onChange={handleChange}
                        className='border border-black rounded-lg p-1'
                    />
                    <br /><br />
                    <label>Time: </label>
                    <br />
                    <input 
                        type="datetime-local" 
                        name="time" 
                        value={newPost.time} 
                        onChange={handleChange}
                        className='border border-black rounded-lg p-1'
                    />
                    <br /><br />
                    <label>Estimated Donation Value: </label>
                    <br />
                    <input 
                        type="number" 
                        name="donationValue" 
                        value={newPost.donationValue} 
                        onChange={handleChange}
                        className='border border-black rounded-lg p-1'
                    />
                    <br /><br />
                    <label>RSVP Limit: </label>
                    <br />
                    <input 
                        type="number" 
                        name="rsvpTotal" 
                        value={newPost.rsvpTotal} 
                        onChange={handleChange}
                        className='border border-black rounded-lg p-1'
                    />
                    <br /><br />
                    <button type="submit" className="bg-primary rounded mt-5">
                        <span className="text-white m-5">Create Post</span>
                    </button>
                </form>
            </div>  
        </main>
    );
}