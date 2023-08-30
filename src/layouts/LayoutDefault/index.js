import NavBar from "../../components/NavBar"
import LeftBar from "../../components/LeftBar"
import RightBar from "../../components/RightBar"
import { Outlet } from "react-router-dom"


function LayoutDefault() {

    return (
        <>
            {/* <div className={`theme-${darkMode ? "dark" : "light"}`}></div> */}
            <div className="layout">
                <NavBar />
                <div style={{ display: "flex" }}>
                    <LeftBar />
                    <div style={{ flex: 6 }}>
                        <Outlet />
                    </div>
                    <RightBar />
                </div>
            </div>
        </>
    )
}
export default LayoutDefault