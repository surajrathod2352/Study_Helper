import { useState } from "react";
import "./App.css";
import VideoPlayer from "./comp/VideoPlayer";
import TextEditor from "./comp/TextEditor";

function App() {
  // let id="";
  const [inputValue, setInputValue] = useState("");
  const [id, setId] = useState("");
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    if(inputValue!=="" && inputValue.length>10)
    {
      e.preventDefault();
      var videoURL = inputValue;
      var splited = videoURL.split("v=");
      var splitedAgain = splited[1].split("&");
      setId(splitedAgain[0]);
    }
    else{
      setInputValue("Please paste correct link")
      
    }
    // setInputValue("");
    console.log(id);
  }

  return (
    <>
      <div className="heading silkscreen-regular">Yt_Helper</div>

      <div className="linkinput">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              class="form-control inputwa"
              placeholder="Youtube Link"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={inputValue}
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </form>
{/* <button className="btn btn-outline-secondary printButton">print</button> */}
      
      </div>
     
        <div className="row">
          <div className="VideoPlayer ">
            <VideoPlayer link={id}></VideoPlayer>
          </div>

          <div className="TextEditor">
            <TextEditor></TextEditor>
          </div>
        </div>
      
    </>
  );
}

export default App;
