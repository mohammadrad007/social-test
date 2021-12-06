import { FaSistrix } from "react-icons/fa";
import userPic from "../../assets/images/user.jpg";
import flag from "../../assets/images/flag.png";

import classes from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div>
        <FaSistrix />
      </div>
      <div className={classes.userInfo}>
        <img src={flag} alt="IranFlag" className={classes.flag} />
        <img src={userPic} alt="userPic" className={classes.userPic} />
      </div>
    </div>
  );
};

export default Navbar;
