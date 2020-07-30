import React from "react";
import ReactDom from "react-dom";
import TimelineMain from "./timeline/container/TimelineMain";
import FriendMain from "./friend/container/FriendMain";

import store from "./common/store";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById("root")
);