import Searchbar from "../../components/Searchbar";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import Profile from "../../components/Profile";
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
