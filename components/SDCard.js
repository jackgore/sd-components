// @flow

import React, { type Node } from "react";

type Props = {|
  children: Node,
  width?: string,
|};

function SDCard(props: Props): Node {
  const { children, width } = props;

  // Allow dynamic sizing of the card
  const style = {
    width,
  };

  return (
    <div className="sd-card" style={style}>
      {children}
    </div>
  );
}

export default SDCard;
