import React, { useState } from 'react'
import { Avatar, Button } from "@material-ui/core"
import db from "../Firebase/firebase"
import "./TweetBox.css"

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            username: "ali",
            displayName: "Ali Jawwad",
            avatar:
                "https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/45441997_1570965773048785_9209222155428954112_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEeOUzjoK59aLMsPea3O8BKZGGgMeQ9Md1kYaAx5D0x3f4-DAY2f2xAf6HF3BaDsNMDvntflfmoZJbNpEdHyJ52&_nc_ohc=dcCrFW2z8y8AX_l1l5B&_nc_oc=AQkeLdTi6svNT4R1DUwHnLW6GzLqDvlZqhFKq2OPMHRhWZlUVNhJdwbtwIw1BdJLeHo&_nc_ht=scontent.fkhi2-1.fna&oh=6bd01d49c039f69ad3003121962d119e&oe=5FF70663",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
        })
        setTweetImage("")
        setTweetMessage("")
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/45441997_1570965773048785_9209222155428954112_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEeOUzjoK59aLMsPea3O8BKZGGgMeQ9Md1kYaAx5D0x3f4-DAY2f2xAf6HF3BaDsNMDvntflfmoZJbNpEdHyJ52&_nc_ohc=dcCrFW2z8y8AX_l1l5B&_nc_oc=AQkeLdTi6svNT4R1DUwHnLW6GzLqDvlZqhFKq2OPMHRhWZlUVNhJdwbtwIw1BdJLeHo&_nc_ht=scontent.fkhi2-1.fna&oh=6bd01d49c039f69ad3003121962d119e&oe=5FF70663" />

                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening"
                        type="text"
                    />
                </div>
                <input
                    placeholder="Optional: Enter image url"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox
