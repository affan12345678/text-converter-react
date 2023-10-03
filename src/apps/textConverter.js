// import PropTypes from "prop-types";
import React, { useState } from "react";

function Textconverter() {
  const [Text, setText] = useState("");
  const [ShowspeakButton, setShowspeakButton] = useState(false);
  const [ShowstopspeakingButton, setShowstopspeakingButton] = useState(false);
  const [Darkmode, setDarkmode] = useState(true);

  const changeTheme = () => {
    setDarkmode(!Darkmode);
    const body = document.body;
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
    } else {
      body.classList.add("dark-theme");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
    if (event.target.value === "") {
      setShowspeakButton(false);
      setShowstopspeakingButton(false);
    }
    setShowspeakButton(true);
  };

  const convertToup = () => {
    let uppedtext = Text.toUpperCase();
    setText(uppedtext);
  };

  const convertTolc = () => {
    let lowedtext = Text.toLowerCase();
    setText(lowedtext);
  };

  const speakText = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = Text;
    msg.voice = speechSynthesis.getVoices()[2];
    if (msg.text === "") {
      setShowspeakButton(false);
    }
    setShowspeakButton(false);
    setShowstopspeakingButton(true);
    window.speechSynthesis.speak(msg);

    msg.onend = () => {
      if (msg.text === "") {
        setShowstopspeakingButton(false);
        setShowspeakButton(false);
      }
      window.speechSynthesis.cancel();
      setShowspeakButton(true);
      setShowstopspeakingButton(false);
    };
  };

  const Stopspeakingtext = () => {
    setShowstopspeakingButton(false);
    setShowspeakButton(true);
    window.speechSynthesis.cancel();
  };

  const clearTextarea = () => {
    setText("");
    setShowstopspeakingButton(false);
    setShowspeakButton(false);
    window.speechSynthesis.cancel();
  };

  return (
    <>
      <div className="application">
        <div id="text-converter-app">
          <div className="converter-app-header">
            <h1>TEXT CONVERTER</h1>
            <div className="toggle-theme-btun-container">
              <button id="toggle-theme-btun" onClick={changeTheme}>
                {Darkmode && <i class="fa-solid fa-moon fa-lg"></i>}
                {!Darkmode && <i class="fa-solid fa-sun fa-lg"></i>}
              </button>
            </div>
          </div>
          <div className="input-textarea">
            <textarea
              className="converter-app-textarea"
              value={Text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="converter-app-footer">
            <button
              id="lc-to-uc-btun"
              className="converter-app-btun"
              onClick={convertToup}
            >
              Convert to uppercase
            </button>
            <button
              id="lc-to-uc-btun"
              className="converter-app-btun"
              onClick={convertTolc}
            >
              Convert to lowercase
            </button>
            {ShowspeakButton && (
              <button
                id="speak-text-btun"
                className="converter-app-btun"
                onClick={speakText}
              >
                Speak Text
              </button>
            )}

            {ShowstopspeakingButton && (
              <button
                id="stop-speaking"
                className="converter-app-btun"
                onClick={Stopspeakingtext}
              >
                Stop
              </button>
            )}

            <button
              className="converter-app-btun"
              onClick={clearTextarea}
              id="clear-converter-app-textarea-btun"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Textconverter;
