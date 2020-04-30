// @flow

// $FlowFixMe For some reason "next/router" cannot be resolved
import { useRouter } from "next/router";
import React, { type Node } from "react";
import SDText from "./SDText";

type Props = {|
  // Controls whether the nav item should be aligned left or right in nav.
  align?: "left" | "right",
  icon?: Node,
  label?: string,
  link?: string,
  onClick?: () => void,
|};

function SDNavItem(props: Props): Node {
  const router = useRouter();

  const { icon, label, link, onClick } = props;

  const classNames = ["sd-nav-bar-item"];
  if (props.align === "right") {
    classNames.unshift("sd-nav-bar-right-item");
  }

  return (
    <div
      className={classNames.join(" ")}
      onClick={() => {
        // We allow both a custom onClick function as well as a link prop
        // to be passed to this function.
        if (onClick != null) {
          onClick();
        }

        if (link != null) {
          // TODO: This component is currently tied to NextJS.
          router.push(link);
        }
      }}
    >
      {icon}
      {label != null ? (
        <SDText size="body1" weight="bold">
          {label}
        </SDText>
      ) : null}
    </div>
  );
}

export default SDNavItem;
