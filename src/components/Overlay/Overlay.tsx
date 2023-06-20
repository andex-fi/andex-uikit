import styled from "styled-components";
import React, { FC, useEffect } from "react";
import { Box, BoxProps } from "../Box";

const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.text}20`};
  z-index: 20;
`;

const BodyLock = () => {
  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
    `;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `;
    };
  }, []);

  return null;
};

interface OverlayProps extends BoxProps {
  isUnmounting?: boolean;
}

export const Overlay: FC<React.PropsWithChildren<OverlayProps>> = (props) => {
  return (
    <>
      <BodyLock />
      <StyledOverlay role="presentation" {...props} />
    </>
  );
};

export default Overlay;
