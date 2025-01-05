import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import color from "../../assets/color.svg";

export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const colors = [
    "#2ECC71",
    "#AF7AC5",
    "#F1948A",
    "#A3E4D7",
    "#F5B7B1",
    "#F5B041",
    "#DC7633",
    "#F1C40F",
    "#AAB7B8",
    "#F1948A",
    "#2ECC71",
    "#F5B041",
  ];

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handlerColor = (color) => {
    if (props.action === "create") {
      props.listenToColorPopper(color);
    } else if (props.action === "update") {
      let obj = {
        noteIdList: [props.id],
        color: color,
      };
    }
  };

  return (
    <div>
      <img class="imgs" src={color} onClick={handleClick} />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{border: 1, p: 1, bgcolor: "background.paper", display: "flex"}}
        >
          {colors.map((color) => (
            <div
              onClick={() => handlerColor(color)}
              style={{
                border: "1px solid black",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                margin: "3px",
                display: "flex",
                backgroundColor: color,
              }}
            ></div>
          ))}
        </Box>
      </Popper>
    </div>
  );
}
