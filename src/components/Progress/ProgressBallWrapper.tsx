import styled from "styled-components";

const ProgressBallWrapper = styled.div`
  display: flex;
  z-index: 2;
  top: -65%;
  position: absolute;
  transform: translate(-50%, -50%);
  transition: left 200ms ease-out;
`;

export default ProgressBallWrapper;
