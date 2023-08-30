import { Link } from "react-router-dom"
import { MdSunny, MdDarkMode, MdGridView, MdPersonOutline, MdOutlineMailOutline, MdOutlineNotificationsNone } from "react-icons/md"
import { HomeOutlined, SearchOutlined } from "@ant-design/icons"
import './NavBar.scss'
function NavBar() {
    const darkMode = true;
    const toggle = true
    return (
        <>
            <div className="navbar">
                <div className="navbar__left">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <span>trankietsocial</span>
                    </Link>
                    <HomeOutlined />
                    {darkMode ? (
                        <MdSunny onClick={toggle} />
                    ) : (
                        <MdDarkMode onClick={toggle} />
                    )}
                    <MdGridView />
                    <div className="navbar__search">
                        <SearchOutlined />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className="navbar__right">
                    <MdPersonOutline />
                    <MdOutlineMailOutline />
                    <MdOutlineNotificationsNone />
                    <div className="navbar__user">
                        {/* <img
                            src={currentUser.profilePic}
                            alt=""
                        /> */}
                        <img
                            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                        />
                        {/* <span>{currentUser.name}</span> */}
                        <span>John Doe</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar