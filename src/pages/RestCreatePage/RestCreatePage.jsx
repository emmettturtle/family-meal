import { useState } from "react";
import { create } from "../../utilities/rest-profile-api"


export default function RestCreatePage({setRestarauntProfile}) {
    const [ formData, setFormData ] = useState({
        name: '',
        address: '',
        description: ''
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
            await create(formDataPayload);
            setRestarauntProfile(true);
        } catch(err) {
            console.log(err)
            setFormData({ 
                ...formData,
                error: 'Profile Creation Failed - Try Again'
            });
        }
    }

    return(
        <div className="form-container">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Name of Restaraunt: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                <label>Location: </label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required/>
                <label>Description of Restaraunt (tell everyone about yourselves!): </label>
                <textarea name="description" value={formData.description} onChange={handleChange} required/>
                <button type="submit" >CREATE PROFILE</button>
            </form>
        </div>
    );
}