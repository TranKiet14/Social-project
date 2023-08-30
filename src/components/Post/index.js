import { HeartOutlined, ShareAltOutlined, CommentOutlined, HeartFilled } from "@ant-design/icons"
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../Comments";
import "./Post.scss"
function Post(props) {
    const [commentOpen, setCommentOpen] = useState(false);
    const { post } = props

    const [liked, setLiked] = useState(false);
    return (
        <>
            <div className="post">
                <div className="post__container">
                    <div className="post__user">
                        <div className="post__userInfo">
                            <img src={post.profilePic} alt="" />
                            <div className="post__details">
                                <Link
                                    to={`/profile/${post.userId}`}
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    <span className="post__name">{post.name}</span>
                                </Link>
                                <span className="post__date">1 min ago</span>
                            </div>
                        </div>

                    </div>
                    <div className="post__content">
                        <p>{post.desc}</p>
                        <img src={post.img} alt="" />
                    </div>
                    <div className="post__info">
                        <div className="post__item" onClick={() => { setLiked(!liked) }}>
                            {liked ? <HeartFilled style={{ color: 'hotpink', }} /> : <HeartOutlined />}
                            12 Likes
                        </div>
                        <div className="post__item" onClick={() => setCommentOpen(!commentOpen)}>
                            <CommentOutlined />
                            12 Comments
                        </div>
                        <div className="post__item">
                            <ShareAltOutlined />
                            Share
                        </div>
                    </div>
                    {commentOpen && <Comments />}
                </div>
            </div>
        </>
    )
}
export default Post