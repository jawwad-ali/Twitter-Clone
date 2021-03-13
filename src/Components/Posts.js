import React from 'react'
import { Avatar } from "@material-ui/core";
import {
    ChatBubbleOutline,
    FavoriteBorder,
    Publish,
    Repeat,
    VerifiedUser,
} from "@material-ui/icons";
import "./Posts.css";

function Posts({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && < VerifiedUser className="post__badge" />}@
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="post_URL" />
                <div className="post__footer">
                    <ChatBubbleOutline />
                    <Repeat />
                    <FavoriteBorder /> 
                    <Publish />
                </div>
            </div>
        </div>
    )
}

export default Posts
