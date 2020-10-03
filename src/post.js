import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="Post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>2/10/2020 16:53</p>
        </div>
      </div>
      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt=""></img>
      </div>

      <div className="post_option">
        <div className="post_options">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_options">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_options">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post_options">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
}

export default post;
