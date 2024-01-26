import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../utilities/users-service'

export default function SignUpFormFunc({ setUser }) {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        email: '',
        password: '',
        confirm: '',
        error: '',
        type: 'Community Member' // initialized to solve form default issues
    })

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit (evt){
        evt.preventDefault();

        try {
            const formDataPayload = {...formData};
            delete formDataPayload.error;
            delete formDataPayload.confirm;
            delete formDataPayload.type;
            const user = await signUp(formDataPayload);
            setUser(user);
            console.log(formData.type)
            if(formData.type === 'Community Member') {
                console.log('HERE')
                navigate('/member');
            } else if(formData.type === 'Restaurant') {
                navigate('/rest')
            }
            //redirect based off form data
        } catch(err){
            console.log(err)
            setFormData({ 
                ...formData,
                error: 'Sign Up Failed - Try Again'
            });
        }
    }

    //choose comm or res

    const disable = formData.password !== formData.confirm;
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                    <select type="type" name="type" value={formData.type} onChange={handleChange} required>
                        <option value="Community Member">Community Member</option>
                        <option value="Restaurant">Restaurant</option>
                    </select>
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    );
}