import {Box} from "@mui/material";
import React from "react";
import "./takenoteone.css";
import checkbox from "../../assets/checkbox.png";
import brush from "../../assets/brush.png";
import image from "../../assets/image.png";

export default function TakeNoteOne(props) {
  const submit = () => {
    props.listenTakeNoteOne();
  };
  
  return (
    <Box>
      <div  class="takenote_parent" onClick={submit}>
        <div class="takenote_one">Take a note...</div>
        <div class="takenote_two">
          <img class="icon" src={checkbox} />
          <img class="icon" src={brush} />
          <img class="icon" src={image} />
        </div>
      </div>
    </Box>
  );
}
