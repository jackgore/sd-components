// @flow

import React, { type Node } from "react";
import SDText from "./SDText";

type Props = {|
  label: string,
  name: string,
  password?: boolean,
  placeholder?: string,
  value?: string,
|};

function SDFormTextItem(props: Props): Node {
  const { label, name, password, placeholder, value } = props;

  return (
    <div className="sd-form-item">
      <SDText size="header2">{label}</SDText>
      <input
        className="sd-form-text-input"
        name={name}
        placeholder={placeholder ?? ""}
        type={password ? "password" : "text"}
        value={value}
      />
    </div>
  );
}

export default SDFormTextItem;
