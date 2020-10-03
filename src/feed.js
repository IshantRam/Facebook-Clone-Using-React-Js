import React, { useState } from "react";
import StoryRell from "./storyRell";
import ChatArea from "./chatArea";
import Post from "./post";
import "./feed.css";
//import db from "./firebase";

function Feed() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) =>
  //     setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
  //   );
  // }, []);
  return (
    <div className="Feed">
      <StoryRell />
      <ChatArea />
      <Post
        profilePic="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        message="Hi"
        timestamp="None"
        username="Ishant Ram"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIItLpYwJI8lXK0KEfizoGVOt9Tmwk5vtMsA&usqp=CAU"
      />
      <Post
        profilePic="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        message="This Works OMG"
        timestamp="None"
        username="Ishant Ram"
        image="https://code.org/shared/images/social-media/codeorg2019_social.png"
      />
    </div>
  );
}

export default Feed;
