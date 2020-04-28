// @flow

import React, { type ChildrenArray, type Element, type Node } from "react";
import SDListItem from "./SDListItem";
import SDText from "./SDText";

type Props = {|
  children: ChildrenArray<Element<typeof SDListItem>>,
  title?: string,
|};

function SDList(props: Props): Node {
  const { children, title } = props;

  return (
    <div className="sd-list">
      {title ? (
        <SDText size="header3" weight="bold">
          {title}
        </SDText>
      ) : null}
      {children}
    </div>
  );
}

export default SDList;
