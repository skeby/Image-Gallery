import Searchbar from "../Searchbar";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import "./style.css";

const Navbar = ({ handleSearch, query }) => {
  return (
    <nav>
      <p>Image Gallery</p>
      <Searchbar handleSearch={handleSearch} query={query} />
      <div className="nav-right">
        <Profile />
        <LoginButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
