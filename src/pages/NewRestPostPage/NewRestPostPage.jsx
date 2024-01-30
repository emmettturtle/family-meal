import { useState } from "react";

export default function NewRestPostPage() {
    const [newPost, setNewPost] = useState({
        description: '',
        location: '',
        time: '',
        donationValue: 0,
        rsvpTotal: 0
    })

    function handleSubmit() {

    }

    function handleChange() {

    }

    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Description: (What does this donation consist of?)</label>
            <textarea name="description" value={newPost.description} onChange={handleChange}></textarea>
            <label>Location: </label>
            <input type="text" name="location" value={newPost.location} onChange={handleChange}/>
            <label>Time: </label>
            <input type="datetime-local" name="time" value={newPost.time} onChange={handleChange}/>
            <label>Estimated Donation Value: </label>
            <input type="number" name="donationValue" value={newPost.donationValue} onChange={handleChange}/>
            <label>RSVP Limit: </label>
            <input type="number" name="rsvpTotal" value={newPost.rsvpTotal} onChange={handleChange}/>
            <button type="submit">CREATE POST</button>
        </form>
    );
}