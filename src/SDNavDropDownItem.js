// @flow

// $FlowFixMe
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// $FlowFixMe
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import React, { type Node, useState } from "react";
import SDList from "./SDList";
import SDListItem from "./SDListItem";
import SDNavItem from "./SDNavItem";

type Props = {|
  values: Array<string>,
  value: string,
  onSelect: (string) => void,
|};

function SDNavDropDownItem(props: Props): Node {
  const [dropdownDisplayed, setDropdownDisplayed] = useState<boolean>(false);

  const { onSelect, value, values } = props;

  const contentStyle = {
    display: !dropdownDisplayed ? "none" : undefined,
  };

  const dropdownContent = (
    <div className="sd-nav-drop-down-content" style={contentStyle}>
      <SDList>
        {values.map((v) => (
          <SDListItem
            key={v}
            padding={"0 8px"}
            onSelect={() => {
              // Close the dropdown
              setDropdownDisplayed(false);

              // Call the user provided on select function with the selected
              // value.
              onSelect(v);
            }}
          >
            {v}
          </SDListItem>
        ))}
      </SDList>
    </div>
  );

  return (
    <div className="sd-nav-drop-down-item">
      <div
        className="sd-nav-drop-down-display"
        onClick={() => {
          setDropdownDisplayed(!dropdownDisplayed);
        }}
      >
        <SDNavItem label={value} />
        <FontAwesomeIcon
          className="sd-nav-drop-down-icon"
          icon={dropdownDisplayed ? faChevronDown : faChevronUp}
        />
      </div>
      {dropdownContent}
    </div>
  );
}

export default SDNavDropDownItem;
