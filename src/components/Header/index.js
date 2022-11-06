import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import "./index.css";

const Header = () => (
  <div className="header-responsive">
    <nav className="header-mob">
      <IoIosArrowBack size={30} />
    </nav>
    <nav className="header-res">
      <img
        src="https://res.cloudinary.com/dyhkn8frb/image/upload/v1667649851/Web_capture_5-11-2022_173351_www.airbnb.co.in_irvosj.jpg"
        alt="websirte-logo"
      />
      <div className="header-container-icons">
        <p className="header-des">Become a Host</p>
        <BiGlobe size={30} />
        <div className="menu-container">
          <AiOutlineMenu size={20} />
          <FaUserCircle size={20} />
        </div>
      </div>
    </nav>
  </div>
);
export default Header;
