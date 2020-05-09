// @flow

import React, { type Node } from "react";

type Props = {|
  children: Node,
  overflow?: "scroll",
  width?: string,
|};

function SDCard(props: Props): Node {
  const { children, overflow, width } = props;

  // Allow dynamic sizing of the card
  const style = {
    overflow,
    width,
  };

  return (
    <div className="sd-card" style={style}>
      {children}
    </div>
  );
}

export default SDCard;
