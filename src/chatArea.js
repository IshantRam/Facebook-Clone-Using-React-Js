import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./chatArea.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { StateValue } from "./StateProvider";

function chatArea() {
  /* const [input, setInput] = useState("");
    const [imageUrl, SetImageUrl] = useState("");*/
  const [{ user }, dispatch] = StateValue();

  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="ChatArea">
      <div className="Chatarea_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            /* value={input}
            onChange={(e) => setInput(e.target.value)}*/
            classname=" Chatarea_input"
            placeholder={`What's on your mind,${user.displayName}`}
          ></input>
          <input
            /*value={imageUrl}
            onChange={(e) => SetImageUrl(e.target.value)}*/
            placeholder="Image URLI(Optinal)"
          ></input>
          <button onClick={handlesubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="Chatarea_bottome">
        <div className="Chatarea_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="Chatarea_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photho/Video</h3>
        </div>
        <div className="Chatarea_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Activity/Feeling</h3>
        </div>
      </div>
    </div>
  );
}

export default chatArea;
