import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 634 600" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M245.628 -0.000421575C105.229 32.747 0.642578 158.694 0.642578 309.068C0.642578 341.015 5.36303 371.859 14.1445 400.942L245.628 -0.000421575ZM85.7704 525.369C115.176 556.926 150.937 582.483 191.015 600L318 380.055L444.986 600C485.063 582.482 520.824 556.926 550.229 525.369L318 123.135L85.7704 525.369ZM621.855 400.942L390.371 -0.000488281C530.771 32.7469 635.357 158.694 635.357 309.068C635.357 341.015 630.637 371.86 621.855 400.942Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
