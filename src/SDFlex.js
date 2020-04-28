// @flow

import React, { type Node } from "react";

type Props = {|
  children: Node,
  justifyContent?: "space-between" | "space-around",
|};

function SDFlex(props: Props): Node {
  const { children, justifyContent = "space-between" } = props;

  const style = {
    justifyContent,
  };

  return (
    <div className="sd-flex" style={style}>
      {children}
    </div>
  );
}

export default SDFlex;
