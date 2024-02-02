import { useState } from "react";
import { create } from "../../utilities/rest-profile-api"


export default function RestCreatePage({setRestarauntProfile}) {
    const [ formData, setFormData ] = useState({
        name: '',
        description: '',
        street: '',
        zip: '',
        city: '',
        state: '',
    })

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const formDataPayload = {...formData};
            const profile = await create(formDataPayload);
            setRestarauntProfile(profile);
        } catch(err) {
            console.log(err)
            setFormData({ 
                ...formData,
                error: 'Profile Creation Failed - Try Again'
            });
        }
    }

    return(
        <main className='flex items-center justify-center'>
            <div className="rounded-md mb-5 border m-20">
                <form autoComplete="off" onSubmit={handleSubmit} className="m-5">
                    <h4 className="font-bold text-lg">Tell us about your restaurant!</h4>
                    <br />
                    <label>Name of Restaraunt: </label>
                    <br />
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    />
                    <br /><br />
                    <label>Description of Restaraunt (tell everyone about yourselves!): </label>
                    <br />
                    <textarea 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <h4 className="font-bold">Address</h4>
                    <br /> 
                    <label>Street Address: </label>
                    <br />
                    <input 
                        type="text" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <label>City: </label>
                    <br />
                    <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <label>State: </label>
                    <br />
                    <input 
                        type="text" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <label>ZIP or postal code: </label>
                    <br />
                    <input 
                        type="text" 
                        name="zip" 
                        value={formData.zip} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <button type="submit" className="bg-primary rounded mt-5">
                        <span className="text-white m-5">Create Profile</span>
                    </button>
                </form>
            </div>
        </main>
    );
}