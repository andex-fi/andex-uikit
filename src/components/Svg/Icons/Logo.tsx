import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3324 0.727025C6.97238 2.9102 0 11.3066 0 21.3316C0 23.4613 0.314693 25.5176 0.900117 27.4564L16.3324 0.727025ZM5.67517 35.7516C7.63554 37.8554 10.0196 39.5592 12.6915 40.727L21.1572 26.0641L29.6229 40.727C32.2947 39.5592 34.6787 37.8554 36.6391 35.7516L21.1571 8.93605L5.67517 35.7516ZM41.4142 27.4565L25.9819 0.727005C35.3419 2.91015 42.3143 11.3066 42.3143 21.3316C42.3143 23.4614 41.9996 25.5177 41.4142 27.4565Z"
        fill="#52058F"
      />
    </Svg>
  );
};

export default Icon;