

export default function Post({ 
    profile,
    user, 
    description, 
    location,
    posted,
    time,
    rsvpTotal,
    rsvpList,
    likes,
    comments
}) {

    return (
        <>
            <h3>{profile.name}</h3>
            <p>{description}</p>
        </>
    );
}