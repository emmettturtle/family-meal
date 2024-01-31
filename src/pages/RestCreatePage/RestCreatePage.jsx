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
                <h4>Restaraunt Info</h4>
                <br />
                <label>Name of Restaraunt: </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                <label>Description of Restaraunt (tell everyone about yourselves!): </label>
                <textarea name="description" value={formData.description} onChange={handleChange} required/>
                <br />
                <h4>Address</h4>
                <label>Street Address: </label>
                <input type="text" name="street" value={formData.street} onChange={handleChange} required/>
                <label>City: </label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required/>
                <label>ZIP or postal code: </label>
                <input type="text" name="zip" value={formData.zip} onChange={handleChange} required/>
                <label>State: </label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} required/>
                <button type="submit" >CREATE PROFILE</button>
            </form>
        </div>
    );
}