
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import * as usersApi from '../../utilities/users-api'

export default function LoginForm({ setUser, setRestarauntProfile }) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({
            ...credentials, 
            [evt.target.name]: evt.target.value 
        });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method 
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await usersService.login(credentials);
            const profile = await usersApi.getProfile();
            setRestarauntProfile(profile);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>
            <div className="rounded-md mb-5 border">
                <form autoComplete="off" onSubmit={handleSubmit} className='m-5'>
                    <label className=''>Your Email</label>
                    <br />
                    <input 
                        type="text" 
                        name="email" 
                        value={credentials.email} 
                        onChange={handleChange} 
                        required 
                        className='border border-black rounded-lg p-1'
                    />
                    <br /><br />
                    <label>Your Password</label>
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        required 
                        className='border border-black rounded-lg p-1'
                    />
                    <br />
                    <button type="submit" className="bg-primary rounded mt-5">
                        <span className="text-white m-5">LOGIN</span>
                    </button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}