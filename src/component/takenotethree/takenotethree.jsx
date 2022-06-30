import Box from "@mui/material/Box";
import React from "react";
import "./takenotethree.css";
import remind from "../../assets/remind me.svg";
import add from "../../assets/add.svg";
import photo from "../../assets/photo.svg";
import archive from "../../assets/archive.svg";
import more from "../../assets/more.svg";
import pin from "../../assets/pin.svg";
import ColorPopper from "../colorpopper/colorpopper";
import {updateArchive, updateNotes} from "../../services/dataservice";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function TakeNoteThree(props) {
  const [editNoteObj, setEditNoteObj] = React.useState({
    title: "",
    description: "",
    noteId: props.note.id,
  });
  const [open, setOpen] = React.useState(false);

  const handleOpen = (noteObj) => {
    setEditNoteObj({
      ...editNoteObj,
      title: noteObj.title,
      description: noteObj.description,
      noteId: noteObj.id,
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const listenToColorUpdate = () => {
    props.listenToTakeNoteThree();
  };
  const taketitle = (event) => {
    setEditNoteObj((prevState) => ({...prevState, title: event.target.value}));
  };
  const takedescription = (event) => {
    setEditNoteObj((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };
  const noteUpdate = () => {
    updateNotes(editNoteObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const archiveUpdate = () => {
    let obj = {
      noteIdList: [props.note.id],
      isArchived: true,
    };
    updateArchive(obj)
      .then((response) => {
        console.log(obj);
        console.log(response);
        props.listenToTakeNoteThree();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <div class="takethree_parent" style={{backgroundColor: props.note.color}}>
        <div class="takethree_child">
          <div class="tk_one" onClick={() => handleOpen(props.note)}>
            {props.note.title}
            <img class="pinone" src={pin} />
          </div>
          <div class="tk_two" onClick={() => handleOpen(props.note)}>
            {props.note.description}
          </div>
          <div class="tk_three">
            <img class="imgs" src={remind} />
            <img class="imgs" src={add} />
            <ColorPopper
              listenToColorUpdate={listenToColorUpdate}
              action="update"
              id={props.note.id}
            />
            <img class="imgs" src={photo} />
            <img class="imgs" src={archive} onClick={archiveUpdate} />
            <img class="imgs" src={more} />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="title_class">
            <input
              type="text"
              defaultValue={props.note.title}
              onChange={taketitle}
            />
          </div>
          <div class="desc_class">
            <input
              type="text"
              defaultValue={props.note.description}
              onChange={takedescription}
            />
          </div>
          <div class="img_cont">
            <img class="img_one" src={remind} />
            <img class="img_one" src={add} />
            <ColorPopper
              listenToColorUpdate={listenToColorUpdate}
              action="update"
              id={props.note.id}
            />
            <img class="img_one" src={photo} />
            <img class="img_one" src={archive} onClick={archiveUpdate} />
            <img class="img_one" src={more} />
            <button onClick={noteUpdate}>close</button>
          </div>
        </Box>
      </Modal>
    </Box>
  );
}
