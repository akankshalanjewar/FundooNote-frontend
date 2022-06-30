import {Box} from "@mui/system";
import React from "react";
import menu from "../../assets/menu1.png";
import keep from "../../assets/keep.png";
import search from "../../assets/search.png";
import refresh from "../../assets/refresh.png";
import listview from "../../assets/listview.png";
import setting from "../../assets/setting.png";
import more from "../../assets/more.png";
import profile from "../../assets/profile.png";
import "./header.css";

export default function Header(props) {
  const openDrawer =()=>{
    props.listenHeader()
  }
  return (
    <Box>
      <div class="header_parent">
        <div class="section_one">
          <img class="header_img" src={menu} onClick={openDrawer} />
          <img class="header_img1" src={keep} />
          <h2>keep</h2>
        </div>
        <div class="section_two">
          <img class="header_img" src={search} />
        </div>
        <div class="section_three">
          <img class="header_img" src={refresh} />
          <img class="header_img" src={listview} />
          <img class="header_img" src={setting} />
        </div>
        <div class="section_four">
          <img class="header_img" src={more} />
          <img class="header_img" src={profile} />
        </div>
      </div>
    </Box>
  );
}
