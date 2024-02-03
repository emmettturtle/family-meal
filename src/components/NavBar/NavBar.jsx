import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, setRestarauntProfile }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
        setRestarauntProfile(null);
    }

    return (
        <div className='bg-secondaryBG'>
            <nav className='bg-secondaryBG flex justify-center mt-4'>
                <ul>
                    <li className='p-2'><NavLink to="/home" end>Home</NavLink></li>
                    <li className='p-2'><NavLink to="/rest-post/new" end>Create</NavLink></li>
                    <li className='p-2'><Link to="#" onClick={handleLogOut} end>Log Out</Link></li>
                </ul>
            </nav>
        </div>

    );
}