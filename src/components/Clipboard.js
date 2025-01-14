import React from "react";
import "./Clipboard.css";
import ClipboardImage from "../assets/clipboard.svg";

function Clipboard({ title, content }) {
  return (
    <div className="clipboard">
      <h2 className="clipboard-title">{title}</h2>
      <p className="clipboard-paragraph">{content}</p>
    </div>
  );
}

export default Clipboard;
