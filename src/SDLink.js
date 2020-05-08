// @flow

import React from "react";

type Props = {|
  children: string,
  href: string,
  hideUnderline?: boolean,
|};

// SDLink is to be used within an SDText element.
function SDLink(props: Props) {
  const { children, hideUnderline, href } = props;

  const classNames = ["sd-link"];
  if (!hideUnderline) {
    classNames.push("sd-link-underline");
  }
  return (
    <a className={classNames.join(" ")} href={href}>
      {children}
    </a>
  );
}

export default SDLink;
