import "./index.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";

const Footer = () => (
  <>
    <div className="footer-container">
      <div>
        <BiSearchAlt2 size={20} />
        <p>Explore</p>
      </div>
      <div>
        <FcLikePlaceholder size={20} />
        <p>Explore</p>
      </div>
      <div>
        <FaUserCircle size={20} />
        <p>Log in</p>
      </div>
    </div>
  </>
);

export default Footer;
