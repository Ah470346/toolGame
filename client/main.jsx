import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "/imports/ui/App";
import * as themes from "../imports/themes/theme.json";
import { setToLS } from "../imports/utils/storage";
import 'antd/dist/antd.css'; 

const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};

Meteor.startup(() => {
  render(<Index />, document.getElementById("react-target"));
});
