import { Link } from 'react-router-dom';
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
                    <li className='p-2'><Link to="/home">Home</Link></li>
                    <li className='p-2'><Link to="#" onClick={handleLogOut}>Log Out</Link></li>
                </ul>
            </nav>
        </div>

    );
}