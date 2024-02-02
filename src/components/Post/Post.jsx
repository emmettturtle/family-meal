

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
        <div className="bg-white shadow-md shadow-gray-300 rounded-md mb-5 border border-gray-100">
            <div className="m-5 relative">
                <div>
                    <span className="font-bold text-lg">{profile.name}</span>
                    <br />
                    <span>{profile.address.city}, {profile.address.state}</span>
                    <br />
                </div>
                <div className="m-10">
                    <span className="">{description}</span>
                    <br /><br />
                    <span className="font-bold">Where: </span>
                    <span>{location}</span>
                    <br />
                    <span className="font-bold">When: </span>
                    <span>{time.toString()}</span>
                </div>
                <button className="bg-primary absolute top-0 right-0 p-1 rounded">
                    <span className="text-white m-5">Detail</span>
                </button>
            </div>
        </div>

    );
}