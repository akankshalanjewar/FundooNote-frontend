import React from "react";
import {addNote} from "../../services/dataservice";
import "./takenotetwo.css";
import pin from "../../assets/pin.svg";
import remind from "../../assets/remind me.svg";
import add from "../../assets/add.svg";
import photo from "../../assets/photo.svg";
import archive from "../../assets/archive.svg";
import more from "../../assets/more.svg";
import undo from "../../assets/undo.svg";
import redo from "../../assets/redo.svg";
import ColorPopper from "../colorpopper/colorpopper";

export default function TakeNoteTwo(props) {
  const [note, setNote] = React.useState({
    title: "",
    description: "",
    color: "",
    isArchived: false,
  });

  const takeTitle = (event) => {
    setNote((prevState) => ({...prevState, title: event.target.value}));
    console.log(event.target.value);
  };
  const takeDescription = (event) => {
    setNote((prevState) => ({...prevState, description: event.target.value}));
    console.log(event.target.value);
  };
  const listenToColorPopper = (color) => {
    setNote((prevState) => ({...prevState, color: color}));
  };
  const archiveNotes = () => {
    setNote((prevState) => ({...prevState, isArchived: true}));
  };
  const submit = () => {
    addNote(note)
      .then((response) => {
        console.log(response);
        
      })
      .catch((error) => {
        console.log(error);
      });
      props.listenTakeNoteTwo();
  };
  return (
    <div class="taketwo_parent" style={{backgroundColor: note.color}}>
      <div class="taketwo_child">
        <div class="take_one">
          <input
            type="text"
            placeholder="Title"
            onChange={takeTitle}
            style={{backgroundColor: note.color}}
          />

          <div class="pin">
            <img src={pin} />
          </div>
        </div>
        <div class="take_two">
          <input
            type="text"
            placeholder="Take a note..."
            onChange={takeDescription}
            style={{backgroundColor: note.color}}
          />
        </div>
        <div class="take_three">
          <div class="icons_container">
            <img class="img" src={remind} />
            <img class="img" src={add} />
            <ColorPopper
              listenToColorPopper={listenToColorPopper}
              action="create"
            />
            <img class="img" src={photo} />
            <img class="img" src={archive} onClick={archiveNotes} />
            <img class="img" src={more} />
            <img class="img" src={undo} />
            <img class="img" src={redo} />
          </div>
          <div class="take_four" onClick={submit}>
            close
          </div>
        </div>
      </div>
    </div>
  );
}
