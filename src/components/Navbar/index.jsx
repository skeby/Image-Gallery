import Searchbar from "../Searchbar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import "./style.css";

const Navbar = ({ onSearch }) => {
  return (
    <nav>
      <p>Image Gallery</p>
      <Searchbar onSearch={onSearch} />
      <div className="nav-right">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
