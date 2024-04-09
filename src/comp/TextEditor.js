import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export default function TextEditor() {
  const quill = {
    width: "103%",
    minHeight: "500px",
    color: "black",
    margin: "0 -10px",
    overflow:"hidden",
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
    ],
  };
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill
        theme="snow"
        style={quill}
        className="quill"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
}
