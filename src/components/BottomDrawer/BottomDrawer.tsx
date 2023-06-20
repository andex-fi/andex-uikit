import React, { useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import useDelayedUnmount from "../../hooks/useDelayedUnmount";
import { DrawerContainer } from "./styles";
import { CloseIcon } from "../Svg";
import { Box } from "../Box";
import { IconButton } from "../Button";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";
import { Overlay } from "../Overlay";
import getPortalRoot from "../../util/getPortalRoot";

interface BottomDrawerProps {
  content: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomDrawer: React.FC<React.PropsWithChildren<BottomDrawerProps>> = ({ content, isOpen, setIsOpen }) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldRender = useDelayedUnmount(isOpen, 350);
  const { isMobile } = useMatchBreakpoints();

  useOnClickOutside(
    ref?.current,
    useCallback(() => setIsOpen(false), [setIsOpen])
  );

  if (!shouldRender || !isMobile) {
    return null;
  }

  const portal = getPortalRoot();

  return (
    <>
      {portal
        ? createPortal(
            <>
              <Overlay />
              <DrawerContainer ref={ref} isUnmounting={!isOpen}>
                <Box position="absolute" right="16px" top="0">
                  <IconButton variant="text" onClick={() => setIsOpen(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                {content}
              </DrawerContainer>
            </>,
            portal
          )
        : null}
    </>
  );
};

export default BottomDrawer;
