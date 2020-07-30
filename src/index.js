import React from "react";
import ReactDom from "react-dom";
import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";

ReactDom.render(
  <div>
    <FriendMain />
    <TimelineMain />
  </div>,
  document.getElementById("root")
);