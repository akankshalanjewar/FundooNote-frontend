import Header from "../../component/header/header";
import TakeNoteOne from "../../component/takenoteone/takenoteone";
import React, { useEffect, useState } from "react";
import TakeNoteTwo from "../../component/takenotetwo/takenotetwo";
import TakeNoteThree from "../../component/takenotethree/takenotethree";
import Drawer1 from "../../component/drawer/drawer";

export default function Dashboard() {
  const [viewNote, setViewNote] = useState(true);
  const [listOfNote, setListOfNote] = useState([]);
  const [drawer,setDrawer]= useState(true)
  const listenTakeNoteOne = () => {
    setViewNote(false);
  };
  const listenTakeNoteTwo = () => {
    setViewNote(true);
  };
  const listenToTakeNoteThree = () => {
  };

  const listenHeader = () => {
    setDrawer(!drawer)
  }
  
 return (
    <div>
      <Header listenHeader={listenHeader} />
      <Drawer1 drawer={drawer}/>
      {viewNote ? (
        <TakeNoteOne listenTakeNoteOne={listenTakeNoteOne} />
      ) : (
        <TakeNoteTwo listenTakeNoteTwo={listenTakeNoteTwo} />
      )}

      {/* <TakeNoteThree/> */}
      <div
        style={{
          width: "75vw",
          height: "100vh",
          // border: "1px solid red",
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "250px",
          marginTop: "3rem",
          justifyContent: "space-evenly",
        }}
      >
        {listOfNote.map((note) => (
          <TakeNoteThree
            note={note}
            listenToTakeNoteThree={listenToTakeNoteThree}
          />
        ))}
      </div>
    </div>
  );
}
