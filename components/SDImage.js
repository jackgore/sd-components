// @flow

import React, { type Node } from "react";

import "./css/sd.css";

type Props = {|
  src: string,
|};

function SDImage(props: Props): Node {
  const { src } = props;
  return <img src={src} />;
}

export default SDImage;
