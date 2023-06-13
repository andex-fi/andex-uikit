import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#52058F" : "#FFFFFF";
  return (
    <Svg viewBox="0 0 156 46" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3324 0.727025C6.97238 2.9102 0 11.3066 0 21.3316C0 23.4613 0.314693 25.5176 0.900117 27.4564L16.3324 0.727025ZM5.67517 35.7516C7.63554 37.8554 10.0196 39.5592 12.6915 40.727L21.1572 26.0641L29.6229 40.727C32.2947 39.5592 34.6787 37.8554 36.6391 35.7516L21.1571 8.93605L5.67517 35.7516ZM41.4142 27.4565L25.9819 0.727005C35.3419 2.91015 42.3143 11.3066 42.3143 21.3316C42.3143 23.4614 41.9996 25.5177 41.4142 27.4565Z"
        fill={textColor}
      />
      <path
        d="M52.8773 37.727L62.8613 15.327H67.9813L77.9973 37.727H72.5573L64.3653 17.951H66.4133L58.1893 37.727H52.8773ZM57.8693 32.927L59.2453 28.991H70.7653L72.1733 32.927H57.8693ZM88.8333 20.255C90.1986 20.255 91.4146 20.5323 92.4813 21.087C93.5693 21.6203 94.4226 22.4523 95.0413 23.583C95.66 24.6923 95.9693 26.1217 95.9693 27.871V37.727H90.9773V28.639C90.9773 27.2523 90.6679 26.2283 90.0493 25.567C89.4519 24.9057 88.5986 24.575 87.4893 24.575C86.7 24.575 85.9853 24.7457 85.3453 25.087C84.7266 25.407 84.2359 25.9083 83.8733 26.591C83.5319 27.2737 83.3613 28.1483 83.3613 29.215V37.727H78.3693V20.511H83.1373V25.279L82.2413 23.839C82.8599 22.687 83.7453 21.8017 84.8973 21.183C86.0493 20.5643 87.3613 20.255 88.8333 20.255ZM106.411 37.983C104.79 37.983 103.329 37.6203 102.027 36.895C100.726 36.1483 99.6913 35.1137 98.9233 33.791C98.1766 32.4683 97.8033 30.911 97.8033 29.119C97.8033 27.3057 98.1766 25.7377 98.9233 24.415C99.6913 23.0923 100.726 22.0683 102.027 21.343C103.329 20.6177 104.79 20.255 106.411 20.255C107.862 20.255 109.131 20.575 110.219 21.215C111.307 21.855 112.15 22.8257 112.747 24.127C113.345 25.4283 113.643 27.0923 113.643 29.119C113.643 31.1243 113.355 32.7883 112.779 34.111C112.203 35.4123 111.371 36.383 110.283 37.023C109.217 37.663 107.926 37.983 106.411 37.983ZM107.275 33.887C108.086 33.887 108.822 33.695 109.483 33.311C110.145 32.927 110.667 32.383 111.051 31.679C111.457 30.9537 111.659 30.1003 111.659 29.119C111.659 28.1163 111.457 27.263 111.051 26.559C110.667 25.855 110.145 25.311 109.483 24.927C108.822 24.543 108.086 24.351 107.275 24.351C106.443 24.351 105.697 24.543 105.035 24.927C104.374 25.311 103.841 25.855 103.435 26.559C103.051 27.263 102.859 28.1163 102.859 29.119C102.859 30.1003 103.051 30.9537 103.435 31.679C103.841 32.383 104.374 32.927 105.035 33.311C105.697 33.695 106.443 33.887 107.275 33.887ZM111.787 37.727V34.207L111.883 29.087L111.563 23.999V13.983H116.555V37.727H111.787ZM128.12 37.983C126.157 37.983 124.429 37.599 122.936 36.831C121.464 36.063 120.322 35.0177 119.512 33.695C118.701 32.351 118.296 30.8257 118.296 29.119C118.296 27.391 118.69 25.8657 119.48 24.543C120.29 23.199 121.389 22.1537 122.776 21.407C124.162 20.639 125.73 20.255 127.48 20.255C129.165 20.255 130.68 20.6177 132.024 21.343C133.389 22.047 134.466 23.071 135.256 24.415C136.045 25.7377 136.44 27.327 136.44 29.183C136.44 29.375 136.429 29.599 136.408 29.855C136.386 30.0897 136.365 30.3137 136.344 30.527H122.36V27.615H133.72L131.8 28.479C131.8 27.583 131.618 26.8043 131.256 26.143C130.893 25.4817 130.392 24.9697 129.752 24.607C129.112 24.223 128.365 24.031 127.512 24.031C126.658 24.031 125.901 24.223 125.24 24.607C124.6 24.9697 124.098 25.4923 123.736 26.175C123.373 26.8363 123.192 27.6257 123.192 28.543V29.311C123.192 30.2497 123.394 31.0817 123.8 31.807C124.226 32.511 124.813 33.055 125.56 33.439C126.328 33.8017 127.224 33.983 128.248 33.983C129.165 33.983 129.965 33.8443 130.648 33.567C131.352 33.2897 131.992 32.8737 132.568 32.319L135.224 35.199C134.434 36.095 133.442 36.7883 132.248 37.279C131.053 37.7483 129.677 37.983 128.12 37.983ZM135.518 37.727L143.23 27.615L143.134 30.367L135.742 20.511H141.342L146.014 26.943L143.902 27.007L148.734 20.511H154.046L146.622 30.271V27.583L154.302 37.727H148.638L143.742 30.879L145.822 31.167L140.958 37.727H135.518Z"
        fill={textColor}
      />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
