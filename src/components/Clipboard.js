import React from "react";
import "./Clipboard.css";
import ClipboardImage from "../assets/clipboard.svg";

function Clipboard({ title, content }) {
  return (
    <div className="clipboard">
      <img
        src={ClipboardImage}
        alt="Clipboard SVG"
        className="clipboard-image"
      />
      <h2 className="clipboard-title">{title}</h2>
      <p className="clipboard-paragraph">
        {content.map((item, index) =>
        item.bold ? <strong key={index}>{item.text}</strong> : item.text
    )}</p>
    </div>
  );
}

export default Clipboard;
