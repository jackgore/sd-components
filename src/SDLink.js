// @flow

import React from "react";

import "./css/sd.css";

type Props = {|
  children: string,
  href: string,
|};

// SDLink is to be used within an SDText element.
function SDLink(props: Props) {
  const { children, href } = props;

  return (
    <a className="sd-link" href={href}>
      {children}
    </a>
  );
}

export default SDLink;
