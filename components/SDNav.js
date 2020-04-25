// @flow

import React, { type Node } from "react";

import "./css/sd.css";

type Props = {|
  children: Node,
  style?: $Keys<typeof STYLE_CLASSES>,
|};

const STYLE_CLASSES = {
  dark: "sd-nav-bar-black",
  light: "sd-nav-bar-blue",
};

function SDNav(props: Props): Node {
  const { children, style = "dark" } = props;

  return <div className={`sd-nav-bar ${STYLE_CLASSES[style]}`}>{children}</div>;
}

export default SDNav;
