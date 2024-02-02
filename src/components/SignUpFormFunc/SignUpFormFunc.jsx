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
            <div className="rounded-md mb-5 border">
                <form autoComplete="off" onSubmit={handleSubmit} className="m-5">
                    <label>Email</label>
                    <br />
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <label>Password</label>
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        className='border border-black rounded-lg p-1'
                    />
                    <br />
                    <br />
                    <label>Confirm</label>
                    <br />
                    <input 
                        type="password" 
                        name="confirm" 
                        value={formData.confirm} 
                        onChange={handleChange} 
                        required 
                        className='border border-black rounded-lg p-1'
                    />
                    <br /> <br />
                    <label>Are you a cummunity member or restaurant?</label>
                    <br />
                    <select 
                        type="type" 
                        name="type" 
                        value={formData.type} 
                        onChange={handleChange} 
                        required
                        className='border border-black rounded-lg p-1'
                    >
                        <option value="Community Member">Community Member</option>
                        <option value="Restaurant">Restaurant</option>
                    </select>
                    <br /><br />
                    <button type="submit" className="bg-primary rounded mt-3" disabled={disable}>
                        <span className="text-white m-5">SIGN UP</span>
                    </button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    );
}