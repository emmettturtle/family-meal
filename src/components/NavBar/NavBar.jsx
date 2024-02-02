import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, setRestarauntProfile }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
        setRestarauntProfile(null);
    }

    return (
        <nav className='bg-secondaryBG'>
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link to="#" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}