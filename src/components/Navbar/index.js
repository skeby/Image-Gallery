import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';
import Profile from "../../components/Profile";

import './style.css'

const Navbar = () => {
    return (
        <nav>
            <p>Image Library</p>
            <div className='nav-space'></div>
            <div className='nav-right'>
                <LoginButton />
                <LogoutButton />
                <Profile />
            </div>
        </nav>
    );
}

export default Navbar;