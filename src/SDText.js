// @flow

import typeof SDLink from "./SDLink";

import React, { type Element, type Node, type ChildrenArray } from "react";

type FontSize = $Keys<typeof FONT_SIZES>;
type TextStyle = $Keys<typeof TEXT_STYLES>;

type Props = {|
  children: ChildrenArray<Element<SDLink> | string>,
  margin?: string,
  size?: FontSize,
  textAlign?: "center",
  textStyle?: TextStyle,
  weight?: "bold" | "normal",
|};

// Maps provided FontSize to a size in pixels (e.g px).
const FONT_SIZES = {
  header1: 32,
  header2: 24,
  header3: 18,
  body1: 16,
  body2: 14,
  body3: 12,
};

const TEXT_STYLES = {
  inherit: "sd-text-inherit",
  primary: "sd-text-primary",
  secondary: "sd-text-secondary",
  light: "sd-text-light",
};

function SDText(props: Props): Node {
  const {
    children,
    margin,
    size,
    textAlign,
    textStyle = "inherit",
    weight,
  } = props;

  // Styles for describing how the text is presented.
  const style = {
    fontSize: FONT_SIZES[size ?? "header1"],
    fontWeight: weight,
    margin,
    textAlign,
  };

  return (
    <div className={`sd-text ${TEXT_STYLES[textStyle]}`} style={style}>
      {children}
    </div>
  );
}

export default SDText;
