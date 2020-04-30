// @flow

import typeof SDFormTextItem from "./SDFormTextItem";
import typeof SDButton from "./SDButton";

import React, { type Node, type Element } from "react";

type Props = {|
  children: Array<Element<SDFormTextItem> | Element<SDButton>>,
  onSubmit: () => void,
  width?: number,
|};

function SDForm(props: Props): Node {
  const { children, width } = props;

  const style = {
    width, // Allows dynamic sizing of the form
  };

  return (
    <form className="sd-form" style={style}>
      {children}
    </form>
  );
}

export default SDForm;
