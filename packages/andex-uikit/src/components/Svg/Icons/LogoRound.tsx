import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 31 31" {...props}>
      <circle cx="15.3926" cy="15.7715" r="15" fill="black"/>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4975 3.77153C6.88161 5.08148 2.69824 10.1193 2.69824 16.1342C2.69824 17.4121 2.88705 18.6458 3.23828 19.809L12.4975 3.77153ZM6.10328 24.7862C7.27948 26.0485 8.70988 27.0707 10.313 27.7714L15.3924 18.9736L20.4719 27.7715C22.075 27.0708 23.5055 26.0486 24.6817 24.7863L15.3925 8.69684L6.10328 24.7862ZM27.5467 19.8092L18.2874 3.7715C23.9034 5.08139 28.0868 10.1193 28.0868 16.1342C28.0868 17.4121 27.898 18.6459 27.5467 19.8092Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
