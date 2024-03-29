import React from "react";
import styled, { keyframes } from "styled-components";
import LogoIcon from "../Svg/Icons/Logo";
import { SpinnerProps } from "./types";

/* const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`; */

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

/* const RotatingAndexIcon = styled(LogoIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`; */

const FloatingAndexIcon = styled(LogoIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 128 }) => {
  return (
    <Container>
      {/* <RotatingAndexIcon width={`${size * 0.5}px`} /> */}
      <FloatingAndexIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
