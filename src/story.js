import React from "react";
import "./story.css";
import { Avatar } from "@material-ui/core";

function story({ image, profilesrc, title }) {
  return (
    <div style={{ background: `url(${image})` }} className="story">
      <Avatar classname="avatar" src={profilesrc} />
      <h4>{title}</h4>
    </div>
  );
}

export default story;
