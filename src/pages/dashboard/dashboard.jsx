import Header from "../../component/header/header";
import TakeNoteOne from "../../component/takenoteone/takenoteone";
import React from "react";
import TakeNoteTwo from "../../component/takenotetwo/takenotetwo";
import TakeNoteThree from "../../component/takenotethree/takenotethree";
import {getNotes} from "../../services/dataservice";
import Drawer1 from "../../component/drawer/drawer";

export default function Dashboard() {
  const [viewNote, setViewNote] = React.useState(true);
  const [listOfNote, setListOfNote] = React.useState([]);
  const [drawer,setDrawer]= React.useState(true)
  const listenTakeNoteOne = () => {
    setViewNote(false);
  };
  const listenTakeNoteTwo = () => {
    setViewNote(true);
  };
  const Getnotes = () => {
    getNotes()
      .then((response) => {
        console.log(response);
        setListOfNote(response.data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    Getnotes();
  }, []);
  console.log(listOfNote);
  const listenToTakeNoteThree = () => {
    Getnotes();
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
