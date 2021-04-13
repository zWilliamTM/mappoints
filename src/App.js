import React, { useEffect, useState } from "react";
import "./App.css";

const getBase64 = (file) => {
  const fr = new FileReader();
  fr.addEventListener("load", (e) => {
    document.getElementById("img").src = e.target.result;
    document.getElementById("b64").innerHTML = e.target.result;
  });
  fr.readAsDataURL(file);
};

function App() {
  const [img, setImg] = useState();

  useEffect(() => {
    if (img) getBase64(img);
  }, [img]);

  return (
    <div>
      <input
        id="file"
        name="file"
        type="file"
        onChange={(event) => {
          setImg(event.currentTarget.files[0]);
        }}
      />
    <p id="b64"></p>
    <img id="img" height="150" />
    </div>
  );
}

export default App;
