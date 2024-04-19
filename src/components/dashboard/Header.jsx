import { MdLogout, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ setShowSidebar }) => {
  return (
    <div className="d-flex justify-content-between align-items-center py-2 pt-3 border-bottom mb-3">
      <div>
        <MdMenu
          className="d-block d-md-none"
          onClick={() => setShowSidebar(true)}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center gap-1 p-2">
        Logout
        <Link className="_Link" to={"/"}>
          <MdLogout />
        </Link>
      </div>
    </div>
  );
};

export default Header;
