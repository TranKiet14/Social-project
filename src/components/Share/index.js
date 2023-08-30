import Image from "../../assets/img.png"
import Friend from "../../assets/friend.png"
import Map from "../../assets/map.png"
import "./Share.scss"
function Share() {
    return (
        <>
            <div className="share">
                <div className="share__container">
                    <div className="share__top">
                        {/* <img
                            src={currentUser.profilePic}
                            alt=""
                        /> */}
                        <input type="text" placeholder={`What's on your mind `} />
                    </div>
                    <hr />
                    <div className="share__bottom">
                        <div className="share__bottom--left">
                            <input type="file" id="file" style={{ display: "none" }} />
                            <label htmlFor="file">
                                <div className="share__item">
                                    <img src={Image} alt="" />
                                    <span>Add Image</span>
                                </div>
                            </label>
                            <div className="share__item">
                                <img src={Map} alt="" />
                                <span>Add Place</span>
                            </div>
                            <div className="share__item">
                                <img src={Friend} alt="" />
                                <span>Tag Friends</span>
                            </div>
                        </div>
                        <div className="share__bottom--right">
                            <button>Share</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Share