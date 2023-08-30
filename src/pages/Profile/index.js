import "./Profile.scss"
import Posts from "../../components/Posts"
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, LinkedinOutlined, QqOutlined, EnvironmentFilled, GlobalOutlined, MailOutlined, MoreOutlined } from "@ant-design/icons"
function Profile() {
    return (
        <>
            <div className="profile">
                <div className="profile__images">
                    <img
                        src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        className="profile__images--cover"
                    />
                    <img
                        src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        className="profile__images--avatar"
                    />
                </div>
                <div className="profile__container">
                    <div className="profile__uInfo">
                        <div className="profile__left">
                            <a href="http://facebook.com">
                                <FacebookOutlined />
                            </a>
                            <a href="http://facebook.com">
                                <InstagramOutlined />
                            </a>
                            <a href="http://facebook.com">
                                <TwitterOutlined />
                            </a>
                            <a href="http://facebook.com">
                                <LinkedinOutlined />
                            </a>
                            <a href="http://facebook.com">
                                <QqOutlined />
                            </a>
                        </div>
                        <div className="profile__center">
                            <span>Jane Doe</span>
                            <div className="profile__center--info">
                                <div className="profile__center--item">
                                    <EnvironmentFilled />
                                    <span>USA</span>
                                </div>
                                <div className="profile__center--item">
                                    <GlobalOutlined />
                                    <span>lama.dev</span>
                                </div>
                            </div>
                            <button>follow</button>
                        </div>
                        <div className="profile__right">
                            <MailOutlined />
                            <MoreOutlined />
                        </div>
                    </div>
                    <Posts />
                </div>
            </div>
        </>
    )
}
export default Profile