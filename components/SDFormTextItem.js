// @flow

import React, { type Node } from "react";
import SDText from "./SDText";

import "./css/sd.css";

type Props = {|
  label: string,
  name: string,
  password?: boolean,
  placeholder?: string,
|};

function SDFormTextItem(props: Props): Node {
  const { label, name, password, placeholder } = props;

  return (
    <div className="sd-form-item">
      <SDText size={"header2"}>{label}</SDText>
      <input
        className="sd-form-text-input"
        name={name}
        placeholder={placeholder ?? ""}
        type={password ? "password" : "text"}
      />
    </div>
  );
}

export default SDFormTextItem;
