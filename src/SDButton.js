// @flow

import React, { type Node } from "react";

type Props = {|
  // Describes the type of the button. These values match the available values
  // on the HTML button tag.
  buttonType?: "button" | "submit" | "reset",

  // What the text of the button will say.
  label: string,

  // Action to take when the button is clicked.
  onClick?: (formMap?: { [string]: any }) => void,

  // Size of the button, as determined by the button sizes map.
  size?: $Keys<typeof BUTTON_SIZES>,

  buttonStyle?: $Keys<typeof BUTTON_STYLE_CLASSES>,
|};

// Map of the different heights determined by the size prop.
const BUTTON_SIZES = {
  small: { height: 24 },
  medium: { height: 32 },
  large: { height: 40 },
};

const BUTTON_STYLE_CLASSES = {
  standard: "sd-standard-button",
  special: "sd-special-button",
};

function SDButton(props: Props): Node {
  const { buttonType, label, onClick, size, buttonStyle } = props;

  const buttonSize = BUTTON_SIZES[size ?? "medium"];

  const buttonStyleClass = BUTTON_STYLE_CLASSES[buttonStyle ?? "standard"];

  const style = {
    ...buttonSize,
  };

  // Builds a map of form names to values for the given event. This is used
  // when the button is a "Submit" button attached to an SDForm.
  const buildFormMap = e => {
    const formElements = Array.from(e.target.form.elements);
    const formValues = {};
    formElements
      .filter(({ name }) => name != "")
      .forEach(({ name, value }) => {
        formValues[name] = value;
      });

    return formValues;
  };

  return (
    <button
      className={`sd-button ${buttonStyleClass}`}
      onClick={e => {
        e.preventDefault();
        if (onClick) {
          // Pass form values into onClick if it is a submit button.
          if (buttonType === "submit") {
            onClick(buildFormMap(e));
          } else {
            onClick();
          }
        }
      }}
      style={style}
      type={buttonType ?? "button"}
    >
      {label}
    </button>
  );
}

export default SDButton;
